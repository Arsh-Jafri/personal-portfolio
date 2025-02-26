import React from 'react';
import DesktopNav from './components/Navigation/DesktopNav';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/global.css';
import './styles/components/blobs.css';

const App: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      <DesktopNav />
      <main>
        <section id="profile">
          <div className="section-blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <Profile />
        </section>
        <section id="projects">
          <div className="section-blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <Projects />
        </section>
        <section id="about">
          <div className="section-blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <About />
        </section>
        <section id="experience">
          <div className="section-blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <Experience />
        </section>
        <section id="contact">
          <div className="section-blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <Contact />
        </section>
      </main>
      <div style={{ position: 'relative' }}>
        <div className="section-blob-container">
          <div className="blob"></div>
          <div className="blob"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App; 