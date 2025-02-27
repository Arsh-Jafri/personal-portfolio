import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import {
  ClearviewProject,
  EconostatsProject,
  NexcapProject,
  WebsiteProject,
  StockProject,
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Clearview",
      image: ClearviewProject,
      tags: ["NLP", "JavaScript", "HTML/CSS", "Web Scraping"],
      description: [
        "A Chrome extension that analyzes news articles for political bias using NLP and sentiment analysis."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/clearview" },
        { text: "Download", link: "https://chromewebstore.google.com/detail/clearview-ai-powered-poli/eaaojgnnhjbcmggeepkpkemopfnjcpnb?hl=en&authuser=0" }
      ]
    },
    {
      id: 2,
      title: "Econostats",
      image: EconostatsProject,
      tags: ["Python", "Flask", "HTML/CSS", "Data Visualization"],
      description: [
        "A real-time economic data visualization platform. Features interactive charts, custom data uploading, and FRED API integration."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/econostats" },
        { text: "Visit Site", link: "http://econostats.co" }
      ]
    },
    {
      id: 3,
      title: "Personal Portfolio",
      image: WebsiteProject,
      tags: ["TypeScript", "React", "HTML/CSS"],
      description: [
        "Fully responsive portfolio website built with React and TypeScript, featuring a design and interactive components."
      ],
      buttons: [
        { text: "GitHub", link: "https://github.com/Arsh-Jafri/personal-portfolio" },
        { text: "Live Demo", link: "https://arshjafri.netlify.app/" }
      ]
    },
    {
      id: 4,
      title: "Nexcap",
      image: NexcapProject,
      tags: ["Figma", "UI/UX", "FinTech", "Pitch Deck"],
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
      id: 5,
      title: "Stock Market Simulator",
      image: StockProject,
      tags: ["Java", "API", "GUI"],
      description: [
        "Built a stock market trading simulation tool and GUI using Java",
        "Features: creating a portfolio, buying/selling stock, downloading stock data, and analyzing stock performance",
        "Implemented use of Alpha Vantage stock data API"
      ],
      buttons: [
        { text: "Github", link: "https://github.com/Arsh-Jafri/stock-market-simulator" },
        { text: "Learn More", link: "https://github.com/Arsh-Jafri/stock-market-simulator#readme" }
      ]
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
        {window.innerWidth <= 600 && (
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