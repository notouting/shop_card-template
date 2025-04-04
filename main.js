let form = document.querySelector("form");

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    let [title, description, minPrice, maxPrice, currency, weight, weightError, cargoPrice, sizes] = form;

    // Проверяем, если валюта CNY выбрана, то конвертируем
    let minPriceValue = minPrice.value;
    let maxPriceValue = maxPrice.value;

    if (currency.value === '¥') {
        // Получаем курс конвертации CNY → UZS
        let cnyToUzsRate = await getCnyToUzsRate();
        
        // Преобразуем цену из CNY в UZS
        minPriceValue = (parseFloat(minPriceValue) * cnyToUzsRate).toFixed(0);
        maxPriceValue = (parseFloat(maxPriceValue) * cnyToUzsRate).toFixed(0);
    }

    let priceText = minPriceValue === maxPriceValue 
        ? `💰 Цена: ${minPriceValue}${currency.value}`
        : `💰 Цена: от ${minPriceValue}${currency.value} до ${maxPriceValue}${currency.value}`;

    let weightText = weight.value && weightError.value 
        ? `⚖️ Вес: ${weight.value} ± ${weightError.value} кг`
        : "";

    let cargoText = cargoPrice.value 
        ? `🚛 Цена за карго: ${cargoPrice.value}${currency.value}`
        : "";

    let text = `
📌 Название товара: ${title.value}
📝 Описание: ${description.value}
${priceText}
${weightText}
${cargoText}
📏 Размеры / Варианты: ${sizes.value}

🔹 По вопросам: @drop_market_support
🔹 Активная ссылка: @drop_market_uz
`;

    copyWord(text.trim());
    alert("Текст скопирован в буфер обмена!");
});

const copyWord = (value) => {
    navigator.clipboard.writeText(value);
};

// Функция для получения текущего курса CNY → UZS
const getCnyToUzsRate = async () => {
    // Пример с API, который дает курс конверсии CNY → UZS
    const url = `https://api.exchangerate-api.com/v4/latest/CNY`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.rates.uzs;  // Возвращаем курс UZS
    } catch (error) {
        console.error("Ошибка при получении курса валют:", error);
        return 0; // Если ошибка, возвращаем 0 (неудачный конверт)
    }
};
