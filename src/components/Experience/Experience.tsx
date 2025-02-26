import React from 'react';
import { CheckmarkIcon } from '../../assets';
import { ExperienceItem } from '../../types';
import '../../styles/components/experience.css';

const Experience: React.FC = () => {
  const languages: ExperienceItem[] = [
    { icon: CheckmarkIcon, title: "Java", level: "Experienced" },
    { icon: CheckmarkIcon, title: "HTML/CSS", level: "Experienced" },
    { icon: CheckmarkIcon, title: "Racket", level: "Experienced" },
    { icon: CheckmarkIcon, title: "JavaScript", level: "Intermediate" },
    { icon: CheckmarkIcon, title: "Python", level: "Intermediate" },
    { icon: CheckmarkIcon, title: "SQL", level: "Intermediate" }
  ];

  const tools: ExperienceItem[] = [
    { icon: CheckmarkIcon, title: "React", level: "Experienced" },
    { icon: CheckmarkIcon, title: "Flask", level: "Experienced" },
    { icon: CheckmarkIcon, title: "Git", level: "Experienced" },
    { icon: CheckmarkIcon, title: "Microsoft Office", level: "Experienced" },
    { icon: CheckmarkIcon, title: "VS Code", level: "Experienced" },
    { icon: CheckmarkIcon, title: "Figma", level: "Experienced" }
  ];

  const ExperienceSection: React.FC<{ title: string, items: ExperienceItem[] }> = ({ title, items }) => (
    <div className="details-container">
      <h2 className="experience-sub-title">{title}</h2>
      <div className="article-container">
        {items.map((item, index) => (
          <article key={index}>
            <img
              src={item.icon}
              alt="Experience icon"
              className="icon"
              loading="lazy"
            />
            <div>
              <h3>{item.title}</h3>
              <p>{item.level}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <ExperienceSection title="Languages" items={languages} />
          <ExperienceSection title="Tools & Frameworks" items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Experience; 