import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: 'none',
      experience: 'none',
      skills: 'none',
      project: 'none',
    };
  }

  introduction_over = () => { this.setState({ introduction: 'visible' }) }
  introduction_out = () => { this.setState({ introduction: 'hidden' }) }
  experience_over = () => { this.setState({ experience: 'visible' }) }
  experience_out = () => { this.setState({ experience: 'hidden' }) }
  skills_over = () => { this.setState({ skills: 'visible' }) }
  skills_out = () => { this.setState({ skills: 'hidden' }) }
  project_over = () => { this.setState({ project: 'visible' }) }
  project_out = () => { this.setState({ project: 'hidden' }) }

  render() {
    return (
      <div id='homeBox'>
        <div>
          <img src="../images/icon.png" className="homeImg" />
        </div>
        <div className="rotate">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Link to="/introduction">
              <div
                className="circle1"
                onMouseOver={this.introduction_over}
                onMouseOut={this.introduction_out}
              >
                <div style={{ visibility: this.state.introduction }} className='hidecircle'>
                  <div>Introduction</div>
                </div>
              </div>
            </Link>
            <Link to="/experience">
            <div
              className="circle2"
              onMouseOver={this.experience_over}
              onMouseOut={this.experience_out}
            >
              <div style={{ visibility: this.state.experience}} className='hidecircle'>
                <div>Experience</div>
              </div>
            </div>
            </Link>
            </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link to="/skills">
            <div
              className="circle3"
              onMouseOver={this.skills_over}
              onMouseOut={this.skills_out}
            >
              <div style={{ visibility: this.state.skills}} className='hidecircle'>
                <div>Skills</div>
              </div>
            </div>
            </Link>
            <Link to="/project">
            <div
              className="circle4"
              onMouseOver={this.project_over}
              onMouseOut={this.project_out}
            >
              <div style={{ visibility: this.state.project }} className='hidecircle'>
                <div>Project</div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}