function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.onscroll = function() { stickyHeader() };

function stickyHeader() {
    const header = document.querySelector("nav");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Scroll offset adjustment function
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const offset = 100;
    const section = document.querySelector(sectionId);
    const sectionPosition = section.offsetTop - offset;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

// Attach event listeners to each link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        scrollToSection(event, this.getAttribute('href'));
    });
});

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        scrollToSection(event, this.getAttribute('href'));
    });
});
