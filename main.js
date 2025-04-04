let form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let [title, icon, minPrice, maxPrice, weight, weightError, cargoPrice, sizes] = form;

    let text = `
📌 **Название товара:** ${title.value}
💰 **Цена:** от ${minPrice.value}$ до ${maxPrice.value}$
⚖ **Вес:** ${weight.value} ± ${weightError.value} кг
🚛 **Цена за карго:** ${cargoPrice.value}$
📏 **Размеры / Варианты:** ${sizes.value}

🔹 По вопросам: @drop_market_support
🔹 Активная ссылка: @drop_market_uz
`;

    copyWord(text);
    alert("Текст скопирован в буфер обмена!");
});

const copyWord = (value) => {
    navigator.clipboard.writeText(value);
};
