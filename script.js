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
      // Update dots on scroll with throttling
      let ticking = false;
      projectsContainer.addEventListener('scroll', function() {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            const slideWidth = projectsContainer.offsetWidth;
            const scrollPosition = projectsContainer.scrollLeft;
            const index = Math.round(scrollPosition / slideWidth);
            
            dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
            });
            
            ticking = false;
          });
          ticking = true;
        }
      });

      // Scroll to project when dot is clicked
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          const slideWidth = projectsContainer.offsetWidth;
          projectsContainer.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
          });
        });
      });

      // Add scroll event listener for snap points
      projectsContainer.addEventListener('scrollend', function() {
        const slideWidth = projectsContainer.offsetWidth;
        const scrollPosition = projectsContainer.scrollLeft;
        const index = Math.round(scrollPosition / slideWidth);
        
        projectsContainer.scrollTo({
          left: index * slideWidth,
          behavior: 'smooth'
        });
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const roles = [
    "Software Developer",
    "UI/UX Designer",
    "Entrepreneur",
    "Problem Solver"
  ];
  
  const typingText = document.querySelector('.typing-text');
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  let typingDelay = 70;  // Faster typing (was 100)
  let erasingDelay = 30; // Faster erasing (was 50)
  let newTextDelay = 800; // Shorter pause between words (was 1000)

  // Immediately set the first role
  typingText.textContent = roles[0];

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 70;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 200; // Reduced pause before typing next word (was 500)
    }

    setTimeout(type, typingDelay);
  }

  // Start the animation sooner
  setTimeout(type, 300); // Even quicker start (was 500)
});

document.addEventListener('DOMContentLoaded', function() {
  // Sections to animate
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Only run animation if section is entering viewport
      if (entry.isIntersecting && !entry.target.classList.contains('section-visible')) {
        requestAnimationFrame(() => {
          entry.target.classList.add('section-visible');
        });
        // Unobserve after animation is added
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add hidden class and start observing
  sections.forEach(section => {
    if (!section.classList.contains('section-hidden')) {
      section.classList.add('section-hidden');
      sectionObserver.observe(section);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('#desktop-nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth > 600) {
    const showMoreBtn = document.querySelector('.show-more-btn');
    const showLessBtn = document.createElement('button');
    showLessBtn.className = 'btn btn-color-2 show-less-btn';
    showLessBtn.textContent = 'Show Less';
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    const buttonContainer = document.querySelector('.show-more-container');
    
    // Initially hide projects and show More button
    hiddenProjects.forEach(project => {
      project.style.display = 'none';
    });
    showMoreBtn.style.display = 'block';
    
    // Show More click handler
    showMoreBtn.addEventListener('click', function() {
      hiddenProjects.forEach(project => {
        project.style.display = 'flex';
        project.style.animation = 'fadeIn 0.5s ease-out forwards';
      });
      showMoreBtn.style.display = 'none';
      buttonContainer.appendChild(showLessBtn);
      showLessBtn.style.display = 'block';
    });
    
    // Show Less click handler
    showLessBtn.addEventListener('click', function() {
      hiddenProjects.forEach(project => {
        project.style.display = 'none';
      });
      showMoreBtn.style.display = 'block';
      showLessBtn.style.display = 'none';
      
      // Scroll back to projects section
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
