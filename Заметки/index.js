let errors = [];
let checkValidity = (textarea) => {
    let validity = textarea.validity;
    if (validity.valueMissing) {errors.push("Вы не ввели текст");}
}

document.addEventListener("DOMContentLoaded", function (event) {
    let text = localStorage.getItem("text");
    if (text != null) {
        document.getElementById("note").value = text;
    }
});

let sendMessage = (note) => {
    document.getElementById("notes").innerHTML += `${note}<br>`; 
    document.getElementById("note").value = "";
} 

let send = () => {
    errors = [];
    let textareas = document.querySelectorAll("textarea");
    for (let textarea of textareas) {
        checkValidity(textarea);
    }
    document.getElementById("error").innerHTML = errors.join("<br>");

    const note = document.getElementById ("note").value;
    if (localStorage.getItem("text") == null) {
        localStorage.setItem("text", note);
    }

    sendMessage(note);
}





