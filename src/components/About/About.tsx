import React from 'react';
import {
  AboutPic,
  HobbiesIcon,
  EducationIcon
} from '../../assets';
import '../../styles/components/about.css';

interface DetailBox {
  icon: string;
  title: string;
  items: string[];
}

const About: React.FC = () => {
  const details: DetailBox[] = [
    {
      icon: HobbiesIcon,
      title: "Hobbies & Interests",
      items: ["Fitness & Weightlifting", "Graphic Design", "Listening to Music"]
    },
    {
      icon: EducationIcon,
      title: "Extracurriculars",
      items: ["Forge Software Team Member", "Disrupt Consulting Associate", "Finnovate Co-Director"]
    }
  ];

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={AboutPic}
            alt="Portrait"
            className="about-pic"
            loading="lazy"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {details.map((detail, index) => (
              <div key={index} className="details-container">
                <img
                  src={detail.icon}
                  alt={detail.title}
                  className="icon"
                  loading="lazy"
                />
                <h3>{detail.title}</h3>
                {detail.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="text-container">
            <p>
              Hi, I'm Arsh Jafri, a <span className="text-emphasis">Computer Science and Economics</span> combined major 
              in <span className="text-emphasis">Northeastern University's Honors Program</span>. I'm passionate about leveraging 
              technology to solve real-world problems, whether through <span className="text-emphasis">software development, 
                data science, or research</span>.
              <br /><br />
              I've worked on projects involving <span className="text-emphasis">frontend development, data analysis, and fintech 
              applications,</span> while also contributing to entrepreneurial and research-driven initiatives. 
              Beyond coursework, I'm actively involved in Northeastern's consulting and tech communities, 
              applying my skills through <span className="text-emphasis">pro bono consulting, research roles, and leadership opportunities</span>. 
              <br /><br />
              Outside of work and academics, I love going to the <span className="text-emphasis">gym, graphic design, listening to Drake, and 
                rewatching Modern Family</span>. Keep scrolling to learn more about my skills!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 