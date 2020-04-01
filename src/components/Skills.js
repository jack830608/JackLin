import React from 'react';
import SkillBar from 'react-skillbars';

export default (props) => {

  const skills = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 85 },
    { type: "SASS/SCSS", level: 70 },
    { type: "Javascript", level: 85 },
    { type: "React/Redux", level: 85 },
    { type: "Jquery", level: 75 },
    { type: "Node.js", level: 80 },
    { type: "MongoDB", level: 60 },
    { type: "MySQL", level: 60 },
    { type: "Docker", level: 70 },
    { type: "ShellScript", level: 60 },
    { type: "Python", level: 50 },
    { type: "Git", level: 80 },
  ];
  const colors = {
    "bar": "linear-gradient(45deg,rgba(75,105,205,0.4) ,rgba(135,153,220,0.8))",
    "title": {
      "text": "#ECF5FF",
      "background": "linear-gradient(45deg,rgba(75,105,205,0.2) ,rgba(75,105,205,0.8))",
    }
  }

  return (
    <div className="Skills">
      <div id="Skills">
        <div className='skillsTitle'>
          <h1>
            Skills
        </h1>
        </div>
        <div className="skillsBox">
          <SkillBar
            skills={skills}
            colors={colors}
            animationDelay={0}
            animationDuration={2000}
          />
        </div>
      </div>
    </div>
  );
}
