let errors = [];
let checkValidity = (input) => {
    let validity = input.validity;
    if (validity.valueMissing) {errors.push("Вы не ввели текст");}
}

let checkSpam = (str) => {
    if (!str) return str;
    str = str.replace(/viagra/i, "***");
    str = str.replace(/xxx/i, "***");
    return str;
}

document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem("name");
    let photo = localStorage.getItem("photo");
    let allComments = localStorage.getItem("allComments");

    if (name != null) {
        document.getElementById("author").value = name;
    }

    if (photo != null) {
        let img = new Image();
        img.src = photo;
        document.getElementById("photo").appendChild(img);
    }

    if (allComments != null) {
        console.log({allComments});
        document.getElementById("comments").innerHTML = allComments;
    }
});

let sendMessage = (author, now, comment, img) => {
    comment = checkSpam (comment);
    author = checkSpam (author);
    document.getElementById("comments").innerHTML += `<span class="author">${author} (${now}): </span><span>${comment}</span><br>`;
    document.getElementById("comments").appendChild(img);
    document.getElementById("comments").innerHTML += `<br>`;
    document.getElementById("comment").value = "";
} 

let send = () => {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    let comments = document.getElementById("comments");
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timezone: 'UTC',
    };
    let now = new Date().toLocaleString("ru", options);
    let img = new Image();
    img.src = "cat_big_eyes.gif";

    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById("error").innerHTML = errors.join("<br>");

    if (localStorage.getItem("name") == null) {
        localStorage.setItem("name", author);
    }

    if (localStorage.getItem("photo") == null) {
        localStorage.setItem("photo", img.src);
    }

    sendMessage(author, now, comment, img);

    localStorage.setItem("allComments", comments.innerHTML);
}

