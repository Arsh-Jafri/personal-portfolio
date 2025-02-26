import React from 'react';
import DesktopNav from './components/Navigation/DesktopNav';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <DesktopNav />
      <main>
        <section id="profile">
          <Profile />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App; 