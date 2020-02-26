import React from 'react';
import SkillBar from 'react-skillbars';

export default (props) => {

  const skills = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 85 },
    { type: "SASS", level: 70 },
    { type: "Javascript", level: 85 },
    { type: "React", level: 85 },
    { type: "Jquery", level: 75 },
    { type: "Node.js", level: 75 },
    { type: "MongoDB", level: 60 },
    { type: "MySQL", level: 60 },
    { type: "Docker", level: 70 },
    { type: "ShellScript", level: 70 },
  ];
  const colors = {
    "bar": "rgb(135,153,220)",
    "title": {
      "text": "#ECF5FF",
      "background": "rgb(75,105,205)",
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
          <SkillBar skills={skills} colors={colors}/>
        </div>
      </div>
    </div>
  );
}
