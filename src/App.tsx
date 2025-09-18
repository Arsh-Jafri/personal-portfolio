import React, { useState, useEffect } from 'react';
import DesktopNav from './components/Navigation/DesktopNav';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/global.css';
import './styles/components/blobs.css';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isImageLoaded } = useLoading();
  
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    if (isImageLoaded) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

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

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App; 