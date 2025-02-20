function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 600) {
    const projectsContainer = document.querySelector('#projects .about-containers');
    const dots = document.querySelectorAll('.scroll-dot');
    
    if (projectsContainer && dots.length) {
      // Update dots on scroll
      projectsContainer.addEventListener('scroll', function() {
        const index = Math.round(this.scrollLeft / this.offsetWidth);
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      });

      // Scroll to project when dot is clicked
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          projectsContainer.scrollTo({
            left: index * projectsContainer.offsetWidth,
            behavior: 'smooth'
          });
        });
      });
    }
  }
});
