let form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let [title, description, minPrice, maxPrice, currency, weight, weightError, cargoPrice, sizes] = form;

    let priceText = minPrice.value === maxPrice.value 
        ? `💰 Цена: ${minPrice.value}${currency.value}`
        : `💰 Цена: от ${minPrice.value}${currency.value} до ${maxPrice.value}${currency.value}`;

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
