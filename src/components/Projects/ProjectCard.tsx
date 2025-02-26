import React from 'react';

interface ProjectButton {
  text: string;
  link: string;
}

interface ProjectProps {
  project: {
    title: string;
    image: string;
    tags: string[];
    description: string[];
    buttons: ProjectButton[];
    hidden?: boolean;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className={`details-container project-card color-container ${project.hidden ? 'hidden-project' : 'initial-project'}`}>
      <img
        src={project.image}
        alt={project.title}
        className="project-img"
        loading="lazy"
      />
      <div className="project-content">
        <h2 className="experience-sub-title project-title">{project.title}</h2>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <ul className="project-description">
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="btn-container">
          {project.buttons.map((button, index) => (
            <button
              key={index}
              className="btn btn-color-2 project-btn"
              onClick={() => window.open(button.link)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 