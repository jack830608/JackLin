import React from 'react';
import SkillBar from 'react-skillbars';

export default (props) => {

  const FrontEnd = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 85 },
    { type: "SASS/SCSS", level: 70 },
    { type: "Javascript", level: 85 },
    { type: "React/Redux", level: 85 },
    { type: "Next.js", level: 80 },
    { type: "Jquery", level: 75 },
  ];
  const BackEnd = [
    { type: "Node.js", level: 80 },
    { type: "Express.js", level: 85 },
    { type: "RESTful API", level: 80 },
    { type: "MongoDB", level: 75 },
    { type: "MySQL", level: 70 },
    { type: "Docker", level: 70 },
    { type: "Python", level: 50 },
  ];
  const Others = [
    { type: "AWS、GCP", level: 70 },
    { type: "Nginx", level: 70 },
    { type: "Git", level: 85 },
    { type: "Command Line", level: 70 },
    { type: "ShellScript", level: 60 },
    { type: "Jira", level: 80 },
    { type: "Confluence", level: 80 },
    { type: "GTM、GA", level: 75 },
  ];
  const FrontEndColors = {
    "bar": "rgba(236, 245, 255, 0.2)",
    "title": {
      "text": "#ECF5FF",
      "background": "rgba(236, 245, 255, 0.2)",
    }
  }
  const BackEndColors = {
    "bar": "rgba(236, 245, 255, 0.3)",
    "title": {
      "text": "#ECF5FF",
      "background": "rgba(236, 245, 255, 0.3)",
    }
  }
  const OthersColors = {
    "bar": "rgba(236, 245, 255, 0.4)",
    "title": {
      "text": "#ECF5FF",
      "background": "rgba(236, 245, 255, 0.4)",
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
          <div style={{ position: 'relative' }}>
            <div className='skillsTitle'>
              <div className="skillsSubtitle">Front-end</div>
            </div>
            <SkillBar
              skills={FrontEnd}
              colors={FrontEndColors}
              animationDelay={0}
              animationDuration={2000}
            />
          </div>
          <div style={{ position: 'relative' ,margin:'15px 0 '}}>
            <div className='skillsTitle'>
              <div className="skillsSubtitle">Back-end</div>
            </div>
            <SkillBar
              skills={BackEnd}
              colors={BackEndColors}
              animationDelay={0}
              animationDuration={2000}
            />
          </div>
          <div style={{ position: 'relative'}}>
            <div className='skillsTitle'>
              <div className="skillsSubtitle">Others</div>
            </div>
            <SkillBar
              skills={Others}
              colors={OthersColors}
              animationDelay={0}
              animationDuration={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
