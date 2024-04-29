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
