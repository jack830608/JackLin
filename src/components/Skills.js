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
    { type: "MongoDB", level: 65 },
    { type: "MySQL", level: 65 },
    { type: "Docker", level: 70 },
    { type: "Python", level: 50 },
  ];
  const Others = [
    { type: "AWS、GCP", level: 70 },
    { type: "Nginx", level: 70 },
    { type: "Gitflow", level: 85 },
    { type: "Command Line", level: 70 },
    { type: "ShellScript", level: 60 },
    { type: "Jira", level: 80 },
    { type: "Confluence", level: 80 },
    { type: "GTM、GA", level: 75 },
  ];
  const FrontEndColors = {
    "bar": "linear-gradient(45deg,rgba(75,105,205,0.4) ,rgba(135,153,220,0.8))",
    "title": {
      "text": "#ECF5FF",
      "background": "linear-gradient(45deg,rgba(75,105,205,0.2) ,rgba(75,105,205,0.8))",
    }
  }
  const BackEndColors = {
    "bar": "linear-gradient(45deg,rgba(75,105,205,0.2) ,rgba(75,105,205,0.8))",
    "title": {
      "text": "#ECF5FF",
      "background": "linear-gradient(45deg,rgba(75,105,205,0.4) ,rgba(135,153,220,0.8))",
    }
  }
  const OthersColors = {
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
