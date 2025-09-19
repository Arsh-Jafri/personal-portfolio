import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets';
import { useLoading } from '../../contexts/LoadingContext';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const { isImageLoaded } = useLoading();

  useEffect(() => {
    // Simulate loading progress while waiting for actual image to load
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          // Stop at 95% and wait for actual image loading
          return 95;
        }
        return prev + Math.random() * 8; // Slower, more realistic loading
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Complete loading when image is loaded
  useEffect(() => {
    if (isImageLoaded && progress >= 95) {
      setProgress(100);
      // Small delay to show 100% before transitioning
      setTimeout(() => {
        // Add fade-out class for blur transition before unmounting
        const overlay = document.querySelector('.loading-screen');
        if (overlay) {
          overlay.classList.add('fade-out');
          setTimeout(() => {
            onLoadingComplete();
          }, 600);
        } else {
          onLoadingComplete();
        }
      }, 500);
    }
  }, [isImageLoaded, progress, onLoadingComplete]);

  return (
    <div className="loading-screen">
      {/* Background blobs with same animation as site */}
      <div className="loading-blob-container">
        <div className="loading-blob loading-blob-1"></div>
        <div className="loading-blob loading-blob-2"></div>
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
