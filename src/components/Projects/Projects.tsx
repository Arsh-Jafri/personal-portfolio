import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import {
  NexcapProject,
  WebsiteProject,
  Project3,
  Project4,
  Project5,
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
  hidden?: boolean;
}

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHidden, setShowHidden] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Nexcap",
      image: NexcapProject,
      tags: ["Figma", "UI/UX", "Pitch Deck"],
      description: [
        "Developed and pitched a crowdfunding app that allows retail investors access to private securities",
        "Won $1.5k and secured 2nd place in an 8-week FinTech startup competition",
        "Spearheaded the ideation, prototyping, and pitching process"
      ],
      buttons: [
        { text: "Pitchdeck", link: NexcapPitch },
        { text: "Learn More", link: NexcapOnePager }
      ]
    },
    {
      id: 2,
      title: "Personal Portfolio Site",
      image: WebsiteProject,
      tags: ["HTML", "CSS", "JavaScript"],
      description: [
        "Learned the basics of frontend web development using HTML, CSS, and JavaScript.",
        "Designed and developed a responsive personal portfolio website.",
        "Deployed website using Netlify."
      ],
      buttons: [
        { text: "Github", link: "https://github.com/Arsh-Jafri/personal-portfolio" },
        { text: "Live Demo", link: "https://arshjafri.netlify.app/" }
      ]
    },
    {
      id: 3,
      title: "Stock Market Simulator",
      image: Project3,
      tags: ["Java", "API", "GUI"],
      description: [
        "Built a stock market trading simulation tool and GUI using Java.",
        "Features: creating a portfolio, buying/selling stock, downloading stock data, and analyzing stock performance.",
        "Implemented use of Alpha Vantage stock data API."
      ],
      buttons: [
        { text: "Github", link: "https://github.com/Arsh-Jafri/stock-market-simulator" },
        { text: "Learn More", link: "https://github.com/Arsh-Jafri/stock-market-simulator#readme" }
      ]
    },
    {
      id: 4,
      title: "Sorting Algorithm Visualizer",
      image: Project4,
      tags: ["React", "CSS", "Animation"],
      description: [
        "Developed an interactive web application to visualize common sorting algorithms.",
        "Implemented bubble sort, merge sort, quick sort, and selection sort with adjustable speed.",
        "Built using React and CSS animations for smooth visualization."
      ],
      buttons: [
        { text: "Github", link: "https://github.com/Arsh-Jafri/sorting-visualizer" },
        { text: "Live Demo", link: "https://sorting-visualizer-arsh.netlify.app/" }
      ],
      hidden: true
    },
    {
      id: 5,
      title: "Weather Dashboard",
      image: Project5,
      tags: ["JavaScript", "API", "Weather"],
      description: [
        "Created a weather dashboard using OpenWeatherMap API and JavaScript.",
        "Features: current weather, 5-day forecast, location search, and weather alerts.",
        "Implemented geolocation for automatic local weather updates."
      ],
      buttons: [
        { text: "Github", link: "https://github.com/Arsh-Jafri/weather-dashboard" },
        { text: "Live Demo", link: "https://weather-dashboard-arsh.netlify.app/" }
      ],
      hidden: true
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        const container = document.querySelector('#projects .about-containers');
        if (container) {
          container.addEventListener('scroll', handleScroll);
        }
      }
    };

    const handleScroll = () => {
      const container = document.querySelector('#projects .about-containers');
      if (container) {
        const slideWidth = container.clientWidth;
        const scrollPosition = container.scrollLeft;
        const index = Math.round(scrollPosition / slideWidth);
        setActiveIndex(index);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      const container = document.querySelector('#projects .about-containers');
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToProject = (index: number) => {
    const container = document.querySelector('#projects .about-containers');
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const visibleProjects = projects.filter(project => !project.hidden || showHidden);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {window.innerWidth <= 600 && (
          <div className="scroll-indicator">
            {visibleProjects.map((_, index) => (
              <span
                key={index}
                className={`scroll-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToProject(index)}
              />
            ))}
          </div>
        )}
      </div>
      {window.innerWidth > 600 && (
        <div className="show-more-container">
          <button
            className="btn btn-color-2 show-more-btn"
            onClick={() => setShowHidden(!showHidden)}
          >
            {showHidden ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects; 