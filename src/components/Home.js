import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default (props) => {

  const [introduction, setIntroduction] = useState('none')
  const [experience, setExperience] = useState('none')
  const [skills, setSkills] = useState('none')
  const [project, setProject] = useState('none')
  const introduction_over = () => { setIntroduction('visible') }
  const introduction_out = () => { setIntroduction('hidden') }
  const experience_over = () => { setExperience('visible') }
  const experience_out = () => { setExperience('hidden') }
  const skills_over = () => { setSkills('visible') }
  const skills_out = () => { setSkills('hidden') }
  const project_over = () => { setProject('visible') }
  const project_out = () => { setProject('hidden') }

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
              onMouseOver={introduction_over}
              onMouseOut={introduction_out}
            >
              <div style={{ visibility: introduction }} className='hidecircle'>
                <div>Introduction</div>
              </div>
            </div>
          </Link>
          <Link to="/experience">
            <div
              className="circle2"
              onMouseOver={experience_over}
              onMouseOut={experience_out}
            >
              <div style={{ visibility: experience }} className='hidecircle'>
                <div>Experience</div>
              </div>
            </div>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link to="/skills">
            <div
              className="circle3"
              onMouseOver={skills_over}
              onMouseOut={skills_out}
            >
              <div style={{ visibility: skills }} className='hidecircle'>
                <div>Skills</div>
              </div>
            </div>
          </Link>
          <Link to="/project">
            <div
              className="circle4"
              onMouseOver={project_over}
              onMouseOut={project_out}
            >
              <div style={{ visibility: project }} className='hidecircle'>
                <div>Project</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}