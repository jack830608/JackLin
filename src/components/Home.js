import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: true,
      introduction: 'none',
      experience: 'none',
      skills: 'none',
      project: 'none',
    };
  }

  introduction_over = () => { this.setState({ introduction: 'flex' }) }
  introduction_out = () => { this.setState({ introduction: 'none' }) }
  experience_over = () => { this.setState({ experience: 'flex' }) }
  experience_out = () => { this.setState({ experience: 'none' }) }
  skills_over = () => { this.setState({ skills: 'flex' }) }
  skills_out = () => { this.setState({ skills: 'none' }) }
  project_over = () => { this.setState({ project: 'flex' }) }
  project_out = () => { this.setState({ project: 'none' }) }


  componentDidMount() {
    setInterval(() => {
      if (this.state.i === 360) {
        this.setState({ i: this.state.i - 1, j: false })
      } else if (this.state.j === false && this.state.i >= 0) {
        this.setState({ i: this.state.i - 1 })
      } else if (this.state.i <= 0) {
        this.setState({ i: this.state.i + 1, j: true })
      } else {
        this.setState({ i: this.state.i + 1 })
      }
    }, 300)
  }
  render() {
    return (
      <div className="homeBox" style={{ backgroundSize: `${100 + this.state.i / 3}% ${100 + this.state.i / 3}%` }}>
        <div>
          <img src="../images/icon.png" className="homeImg" />
        </div>
        <div className="rotate" style={{ transform: `rotate(${this.state.i}deg)` }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Link to="/introduction">
              <div
                className="circle1"
                onMouseOver={this.introduction_over}
                onMouseOut={this.introduction_out}
              >
                <div style={{ display: this.state.introduction, transform: `rotate(-${this.state.i}deg)` }} className='hidecircle'>
                  <div>test</div>
                </div>
              </div>
            </Link>
            <Link to="/experience">
            <div
              className="circle2"
              onMouseOver={this.experience_over}
              onMouseOut={this.experience_out}
            >
              <div style={{ display: this.state.experience, transform: `rotate(-${this.state.i}deg)` }} className='hidecircle'>
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
              <div style={{ display: this.state.skills, transform: `rotate(-${this.state.i}deg)` }} className='hidecircle'>
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
              <div style={{ display: this.state.project, transform: `rotate(-${this.state.i}deg)` }} className='hidecircle'>
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