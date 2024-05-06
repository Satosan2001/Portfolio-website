const navbar = document.querySelector("#navbar");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

menu.addEventListener("click", fonction() {
    navbar.classList.add("active");
})

close.addEventListener("click", fonction() {
    navbar.classList.remove("active");
})
