let checkSpam = (str) => {
    if (!str) return str;
    str = str.replace(/viagra/i, "***");
    str = str.replace(/xxx/i, "***");
    return str;
}

document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem("name");
    let photo = localStorage.getItem("photo");
    if (name != null) {
        document.getElementById("author").value = name;
    }
    if (photo != null) {
        let img = new Image();
        img.src = photo;
        document.getElementById("photo").appendChild(img);
    }
});

let sendMessage = (author, comment, img) => {
    comment = checkSpam (comment);
    author = checkSpam (author);
    document.getElementById("comments").innerHTML += `<span class="author">${author}: </span><span>${comment}</span><br>`;
    document.getElementById("comments").appendChild(img);
    document.getElementById("comments").innerHTML += `<br>`;
    document.getElementById("comment").value = "";
} 

let send = () => {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    let img = new Image();
    img.src = "cat_big_eyes.gif";

    if (localStorage.getItem("name") == null) {
        localStorage.setItem("name", author);
    }

    if (localStorage.getItem("photo") == null) {
        localStorage.setItem("photo", img.src);
    }

    sendMessage(author, comment, img);
}

