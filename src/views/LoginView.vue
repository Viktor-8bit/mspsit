<template>

    <div class="mt-5">
        <div class="row mt-5">
            <div class="col-md-2 col-sm-0"></div>

            <div class="my-container col-6 col-sm p-4" style="width: 100vh;">

                <form>
                    <div class="mt-3 text-center">
                        <h2>Войдите в аккаунт</h2>
                    </div>    

                    <div class="row ms-1 mt-5 p-2">
                        <div class="col">
                            <h4>Email</h4>
                        </div>   
                        <div class="col">
                            <input type="text">
                        </div>
                    </div>

                    <div class="row ms-1 mt-3 p-2">
                        <div class="col">
                            <h4>Password</h4>
                        </div>   
                        <div class="col">
                            <input type="text">
                        </div>
                    </div>

                    <div class="form-check ms-4 mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            <p>Запомнить меня</p>
                        </label>
                    </div>

                    <div class="mb-3 ps-4">
                        <label for="exampleFormControlTextarea1" class="form-label">Лиценщионное соглашение, подправьте если нужно</label>
                        <textarea v-model="licensia" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="row ps-5 pr-4 mt-4">
                        <div class="form-check col">
                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Принять лицензионное соглашение
                            </label>
                        </div>

                        <div class="form-check col">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Не принять лицензионное соглашение
                            </label>
                        </div>
                    </div>

                    <button class="btn btn-secondary mt-4 ms-4">Войли в систему</button>

                </form>
            </div>
            <div class="col-md-2 col-sm-0"></div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                licensia: "Обновления: Мы оставляем за собой право обновлять этот сайт в любое время, особенно если нам станет скучно. \nОбратная связь: Если у вас есть жалобы, пожалуйста, отправьте их на адрес complaints@nowhere.com.\n Мы обещаем не читать их.\n Права на контент: Все права на контент принадлежат нам, за исключением тех случаев, когда мы их забываем.",
            }
        },
    }
</script>

<style>

    .login-item {
        width: 100%;
    }

    .my-container {
        background-color: #322F35;
        color: white;
        padding: 4%;
        margin: 0 0 5% 0;
        border-radius: 30px; 
    }

    /* Стили для чекбоксов */
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #54595E !important;
    border-color: #54595E !important;
    }

    /* Стили для радиокнопок */
    .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #54595E !important;
    border-color: #54595E !important;
    }

</style>