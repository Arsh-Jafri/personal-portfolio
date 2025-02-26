import React from 'react';
import { NavLink } from '../../types';
import '../../styles/components/footer.css';

const Footer: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: "#projects", text: "Projects" },
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#contact", text: "Contact" }
  ];

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const offset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {new Date().getFullYear()} Arsh Jafri. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer; 