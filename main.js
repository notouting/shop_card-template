let form = document.querySelector("form")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let [predzakaz, icon, ism, sezon, narx, razmer, btn] = form

    let text = `
🔱НОВАЯ КОЛЛЕКЦИЯ🔱

🇺🇿На предзаказ "${predzakaz.value}"

${icon.value}${ism.value}

🔥Сезон:${sezon.value}

💸Цена:${narx.value}$

⚜️Размеры:${razmer.value}

❔По вопросам :
@kias_shop_support

Активная ссылка: 
@KIAS_Shop_clothes`

    copyWord(text)
    alert("copied to clipboard")
})

const copyWord = (value) => {

    navigator.clipboard.writeText(value);

    alert("Copied the text: " + value);
}