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
import { ProfilePic } from './assets';
import './styles/global.css';
import './styles/components/blobs.css';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setImageLoaded, isImageLoaded } = useLoading();
  
  // Initialize scroll animations
  useScrollAnimation();

  // Preload critical profile image while the loading screen is visible
  useEffect(() => {
    let didCancel = false;
    const img = new Image();
    const safetyTimeout = setTimeout(() => {
      if (!didCancel) setImageLoaded(true);
    }, 10000);

    img.onload = () => {
      if (!didCancel) {
        clearTimeout(safetyTimeout);
        setImageLoaded(true);
      }
    };
    img.onerror = () => {
      if (!didCancel) {
        clearTimeout(safetyTimeout);
        // Fail open to avoid being stuck on the loader
        setImageLoaded(true);
      }
    };
    img.src = ProfilePic as unknown as string;

    return () => {
      didCancel = true;
      clearTimeout(safetyTimeout);
    };
  }, [setImageLoaded]);

  // Note: We do not hide the loader here. The LoadingScreen hides itself
  // only after its progress reaches 100% once the image is loaded.

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <div className={`app ${isImageLoaded ? 'app--ready' : 'app--loading'}`}>
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
    </>
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