let errors = [];
let checkValidity = (textarea) => {
    let validity = textarea.validity;
    if (validity.valueMissing) {errors.push("Вы не ввели текст");}
}

document.addEventListener("DOMContentLoaded", function (event) {
    let allNotes = localStorage.getItem("allNotes");

    if (allNotes != null) {
        console.log({allNotes});
        document.getElementById("notes").innerHTML = allNotes;
    }
});

let sendMessage = (now, note) => {
    document.getElementById("notes").innerHTML += `(${now})<br>${note}<br>`; 
    document.getElementById("note").value = "";
} 

let send = () => {
    errors = [];
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timezone: 'UTC',
    };
    let now = new Date().toLocaleString("ru", options);
    let textareas = document.querySelectorAll("textarea");
    let note = document.getElementById ("note").value;
    let notes = document.getElementById("notes");
    for (let textarea of textareas) {
        checkValidity(textarea);
    }
    document.getElementById("error").innerHTML = errors.join("<br>");

    if (note != "") {
        sendMessage(now, note);
        localStorage.setItem("allNotes", notes.innerHTML);
    }
}





