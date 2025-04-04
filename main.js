<!doctype html>
<html lang="ru">

<head>
    <title>Товарная карточка</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <form class="card p-3">
                    <input class="form-control mb-2" type="text" placeholder="Название товара" required>
                    
                    <textarea class="form-control mb-2" placeholder="Описание товара" rows="3" required></textarea>
                    
                    <input class="form-control mb-2" type="text" placeholder="Мин. цена" required>
                    <input class="form-control mb-2" type="text" placeholder="Макс. цена" required>
                    <select class="form-select mb-2" id="currency">
                        <option value="$">USD ($)</option>
                        <option value="сум">UZS (сум)</option>
                        <option value="¥">CNY (¥)</option>
                    </select>

                    <input class="form-control mb-2" type="text" placeholder="Вес (кг)">
                    <input class="form-control mb-2" type="text" placeholder="Погрешность веса (кг)">
                    
                    <input class="form-control mb-2" type="text" placeholder="Цена за карго">
                    <input class="form-control mb-2" type="text" placeholder="Размеры / Варианты" required>
                    
                    <button class="btn btn-primary mt-2 w-100" type="submit">Скопировать</button>
                </form>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>
