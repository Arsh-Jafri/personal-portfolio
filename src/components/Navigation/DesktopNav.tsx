import React, { useEffect, useState } from 'react';
import '../../styles/components/navigation.css';
import { Logo } from '../../assets';

const DesktopNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
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
    <nav id="desktop-nav" className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src={Logo} alt="Arsh Jafri" className="logo-image" />
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav; 