import React from 'react';

export default (props) => {

  return (
    <div className="Introduction">
      <div id="Introduction">
        <div className={'introductionTitle'}>
          <h1>
            About Me
        </h1>
        </div>
        <div className={'introductionBox'}>
          <div className={'introductionLeft'}>
            <p>My name is Jack Lin, have three years of experience in developing back-end and front-end.</p>
            <p>I am passionate about pursuing new knowledge, new skills and enjoying the sense of accomplishment of software development.</p>
            <p>For me , coding is to make life more convenient & solve problems in life, so I am happy to challenge new things and learn many new skills.</p>
            <div className="location">
              <img src="/images/pin.svg" />
              <div>Taipei, Taiwan</div>
            </div>
            <div className="buttonBox">
            <div
              className="introductionButton"
              onClick={() => window.open('mailto:jack830608@gmail.com', '_blank')}
            >
              Contact Me
          </div>
          <div
              className="introductionButton1"
              onClick={() => document.getElementById('ofel_btn_container').click()}
            >
              Leave a message
          </div>
          </div>
          </div>
          <div className={'introductionRight'}>
            <h1>
              {'</>'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
