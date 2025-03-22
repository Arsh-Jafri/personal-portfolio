import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import {
  ClearviewProject,
  EconostatsProject,
  NexcapProject,
  WebsiteProject,
  BrickBreakerProject,
  SnakeGameProject,
  NexcapPitch,
  NexcapOnePager
} from '../../assets';
import '../../styles/components/projects.css';

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string[];
  buttons: {
    text: string;
    link: string;
  }[];
}

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const projects: Project[] = [
    {
      id: 1,
      title: "Clearview",
      image: ClearviewProject,
      tags: ["JavaScript", "HTML/CSS", "NLP", "Sentiment Analysis", "Web Scraping"],
      description: [
        "A Chrome extension that analyzes news articles for political bias and highlights flagged sections using NLP and sentiment analysis."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/clearview" },
        { text: "Install", link: "https://chromewebstore.google.com/detail/clearview-ai-powered-poli/eaaojgnnhjbcmggeepkpkemopfnjcpnb?hl=en&authuser=0" }
      ]
    },
    {
      id: 2,
      title: "Econostats",
      image: EconostatsProject,
      tags: ["Python", "Flask", "HTML/CSS", "FRED API", "Data Visualization"],
      description: [
        "A real-time economic data visualization platform. Features FRED API integration, custom data uploading, and interactive charts."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/econostats" },
        { text: "Visit Site", link: "http://econostats.co" }
      ]
    },
    {
      id: 3,
      title: "Dijkstra's Snake Game",
      image: SnakeGameProject,
      tags: ["Java", "Java Swing", "AWT", "Dijkstra's Algorithm"],
      description: [
        "A modern take on the classic Snake game featuring an AI opponent that uses Dijkstra's algorithm for intelligent pathfinding."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/dijkstra-snake-game" },
        { text: "Learn More", link: "https://github.com/Arsh-Jafri/dijkstra-snake-game/blob/main/README.md" }
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio",
      image: WebsiteProject,
      tags: ["TypeScript", "React", "HTML/CSS"],
      description: [
        "Fully responsive portfolio website built with React and TypeScript, featuring a responsive design and interactive components."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/personal-portfolio" },
        { text: "Live Demo", link: "https://arshjafri.netlify.app/" }
      ]
    },
    {
      id: 5,
      title: "Nexcap",
      image: NexcapProject,
      tags: ["Figma", "UI/UX", "FinTech", "Pitch Deck"],
      description: [
        "Developed and pitched a crowdfunding app that allows retail investors access to private securities. Secured $1.5k in seed funding from a panel of judges.",
      ],
      buttons: [
        { text: "Pitchdeck", link: NexcapPitch },
        { text: "Learn More", link: NexcapOnePager }
      ]
    },
    {
      id: 6,
      title: "Brick Breaker",
      image: BrickBreakerProject,
      tags: ["Java", "Java Swing", "GUI", "OOP"],
      description: [
        "A classic brick breaker game with dynamic difficulty scaling, a power-up system, custom physics, and collision detection."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/brick-breaker" },
        { text: "Learn More", link: "https://github.com/Arsh-Jafri/brick-breaker/blob/main/README.md" }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const container = document.querySelector('#projects .about-containers');
      if (container) {
        const cards = container.querySelectorAll('.details-container');
        const containerWidth = container.clientWidth;
        const scrollPosition = container.scrollLeft;
        
        // Find which card is most visible
        let maxVisibility = 0;
        let mostVisibleIndex = 0;
        
        cards.forEach((card, index) => {
          const cardBounds = card.getBoundingClientRect();
          const containerBounds = container.getBoundingClientRect();
          const visibility = Math.min(
            Math.max(0,
              Math.min(cardBounds.right, containerBounds.right) -
              Math.max(cardBounds.left, containerBounds.left)
            ),
            cardBounds.width
          );
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleIndex = index;
          }
        });

        setActiveIndex(mostVisibleIndex);
      }
    };

    if (isMobile) {
      const container = document.querySelector('#projects .about-containers');
      if (container) {
        container.addEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      const container = document.querySelector('#projects .about-containers');
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);

  const scrollToProject = (index: number) => {
    const container = document.querySelector('#projects .about-containers');
    if (container) {
      const cards = container.querySelectorAll('.details-container');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {isMobile && (
          <div className="scroll-indicator">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`scroll-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToProject(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 