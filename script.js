let text = "IT Student | AI Engineer | Full Stack Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();

function toggleDark() {
    document.body.classList.toggle("dark");
}

function msg() {
    alert("Thanks for visiting my portfolio 🚀");
}
