import React, { useEffect, useState } from 'react';
import {
  ProfilePic,
  LinkedInIcon,
  GithubIcon,
  Resume
} from '../../assets';
import '../../styles/components/profile.css';

const Profile: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const roles = [
      "AI Engineer",
      "Problem Solver",
      "Software Developer",
      "Full Stack Engineer",
      "UI/UX Designer"
    ];

    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];
    
    const type = () => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setTypingSpeed(30);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
          setTypingSpeed(200);
        }
      } else {
        if (displayText.length < currentRole.length) {
          setDisplayText(prev => currentRole.slice(0, prev.length + 1));
          setTypingSpeed(70);
        } else {
          setIsDeleting(true);
          setTypingSpeed(800);
        }
      }
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img 
          src={ProfilePic}
          alt="Portrait"
          loading="eager" 
          fetchPriority="high"
          className={`profile-pic ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="profile-pic-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
      <div className="section__text">
        <h1 className="title">👋 Hey, I'm Arsh Jafri</h1>
        <div className="typing-container">
          <span className="typing-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </div>
        <p className="section__text__p2">B.S. Computer Science & Economics</p>
        <h4 className="section__uni__name">Northeastern University Honors Program '27</h4>
        <div className="btn-container">
          <button
            className="btn btn-color-1"
            onClick={() => window.open(Resume)}
          >
            My Resume
          </button>
          <button 
            className="btn btn-color-2" 
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          <a href="https://linkedin.com/in/arshjafri" target="_blank" rel="noopener noreferrer">
            <img
              src={LinkedInIcon}
              alt="Social link"
              className="icon"
              loading="eager"
            />
          </a>
          <a href="https://github.com/arsh-jafri" target="_blank" rel="noopener noreferrer">
            <img
              src={GithubIcon}
              alt="Social link"
              className="icon"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile; 