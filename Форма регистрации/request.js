const firstName = document.getElementById ("firstName");
const email = document.getElementById ("email");
const password = document.getElementById ("password");
const password2 = document.getElementById ("password2");

let errors = [];
let checkValidity = (input) => {
    let validity = input.validity;
    if (validity.valueMissing) {errors.push("Вы не ввели " + input.placeholder);}
}

let checkAll = () => {
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById("errorMessage").innerHTML = errors.join("<br>");

    if (password.value != password2.value) {
        document.getElementById("errorMessage").innerHTML += "<br>Пароли не совпадают!<br>";
    }

    let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;    
    if (!email.value.match(emailFormat)) {
        document.getElementById("errorMessage").innerHTML += "<br>Адрес электронной почты введен неверно!<br>";
        return;
    }

    if (errors.length == 0 && password.value == password2.value) {
        document.getElementById("done").innerHTML += `Добро пожаловать, ${firstName.value}!`;
        for (let input of inputs) {
            input.value = "";
        }
    }
}