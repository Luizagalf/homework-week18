let number = document.getElementById("number");
let validateNumber = (number) => {
    let numberFormat = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (number.value.match(numberFormat)) {
        document.getElementById("number").value = "";
        return true;
    }
    else {
        alert("Номер кредитной карты введен неверно!");
        return false;
    }
}

let checkAll = () => {
    validateNumber(number);
}