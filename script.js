let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

// Function to hide the menu bar
function hideMenuBar() {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x'); // Hide menu icon if it's shown
}

// Add event listener to navbar to hide menu bar when mouse leaves it
navbar.addEventListener('mouseleave', hideMenuBar);

// Add event listener to document to hide menu bar when clicked anywhere on the page
document.addEventListener('click', (event) => {
    // Check if the clicked element is not the menu icon or within the navbar
    if (event.target !== menuIcon && !navbar.contains(event.target)) {
        hideMenuBar();
    }
});

// Function to handle scrolling and update active section in the navbar
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Function to toggle menu bar visibility when menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

let slideIndexSecond = 1;
showSlidesSecond(slideIndexSecond);

function plusSlidesSecond(n) {
    showSlidesSecond(slideIndexSecond += n);
}

function showSlidesSecond(n) {
    let i;
    let slidesSecond = document.getElementsByClassName("mySlidesSecond");
    if (n > slidesSecond.length) {slideIndexSecond = 1}
    if (n < 1) {slideIndexSecond = slidesSecond.length}
    for (i = 0; i < slidesSecond.length; i++) {
        slidesSecond[i].style.display = "none";
    }
    slidesSecond[slideIndexSecond-1].style.display = "block";
}
