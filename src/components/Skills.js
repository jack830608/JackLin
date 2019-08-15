import React from 'react';

export default () => {
  return (
    <div className="container" id="container">
      <div className="ArrowBox1">
        <div className="SkillBox1">Font-End</div>
        <div className="SkillArrowLeft1">
          <li>HTML、CSS、JavaScript</li>
          <li>SASS、SCSS</li>
          <li>jQuery</li>
          <li>RWD</li>
          <li>React、Redux</li>
          <li>Styled Components</li>
          <li>Next.js</li>
          <li>Angular.js (1.x)</li>
        </div>
        <div className="SkillArrowRight1"></div>
      </div>
      <div className="ArrowBox2">
        <div className="SkillBox2">Back-End</div>
        <div className="SkillArrowLeft2">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB、Mongoose</li>
          <li>RESTful API</li>
          <li>串接第三方 API</li>
          <li>Nginx</li>
        </div>
        <div className="SkillArrowRight2"></div>
      </div>
      <div className="ArrowBox3">
        <div className="SkillBox3">Others</div>
        <div className="SkillArrowLeft3">
          <li>AWS</li>
          <li>DigitalOcean</li>
          <li>Git、Gitlab、bitbucket</li>
          <li>MVC design pattern</li>
          <li>Command Line</li>
          <li>Jira、Confluence</li>
        </div>
        <div className="SkillArrowRight3"></div>
      </div>
    </div>
  );
}
