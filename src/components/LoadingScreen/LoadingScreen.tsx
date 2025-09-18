import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  isImageLoaded: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete, isImageLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for more realistic loading
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Separate effect to handle completion when both progress is 100% and image is loaded
  useEffect(() => {
    if (progress >= 100 && isImageLoaded) {
      setIsComplete(true);
      // Wait a bit before calling onLoadingComplete to show 100%
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  }, [progress, isImageLoaded, onLoadingComplete]);

  return (
    <div className={`loading-screen ${isComplete ? 'fade-out' : ''}`}>
      {/* Floating Blue Blobs */}
      <div className="loading-blob-container">
        <div className="loading-blob blob-1"></div>
        <div className="loading-blob blob-2"></div>
      </div>
      
      <div className="loading-content">
        <div className="logo-container">
          <img 
            src={Logo} 
            alt="Arsh Jafri Logo" 
            className="loading-logo"
          />
        </div>
        <div className="loading-percentage">
          {Math.round(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
