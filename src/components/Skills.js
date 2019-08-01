import React from 'react';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container" id="container">
        <div className="ArrowBox1">
          <div className="SkillBox1">Font-End</div>
          <div className="SkillArrowLeft1">
            <li>HTML、CSS、JavaScript</li>
            <li>jQuery</li>
            <li>RWD</li>
            <li>React、Redux</li>
            <li>Next.js</li>
            <li>Styled Components</li>
            <li>Angular.js (1.x)</li>
          </div>
          <div className="SkillArrowRight1"></div>
        </div>
        <div className="ArrowBox2">
          <div className="SkillBox2">Back-End</div>
          <div className="SkillArrowLeft2">
            <li>Node.js</li>
            <li>Express Framework</li>
            <li>MongoDB、Mongoose</li>
            <li>RESTful API</li>
            <li>串接第三方 API</li>
            <li>AWS</li>
          </div>
          <div className="SkillArrowRight2"></div>

        </div>
        <div className="ArrowBox3">
          <div className="SkillBox3">Others</div>
          <div className="SkillArrowLeft3">
            <li>Git、Gitlab、bitbucket</li>
            <li>Nginx</li>
            <li>DigitalOcean</li>
            <li>MVC design pattern</li>
            <li>Command Line</li>
            <li>Jira、Confluence</li>
          </div>
          <div className="SkillArrowRight3"></div>
        </div>
      </div>
    );
  }
}
