import React from 'react';

export default (props) => {

  return (
    <div
      className="container"
      id="container"
      style={{ transform: 'skewY(-5deg)', background: '#29323f', backgroundImage: 'url(/images/new_head.png)', backgroundRepeat: 'no-repeat' }}
    >
      <div style={{ transform: 'skewY(5deg)' }}>
        <div className="box">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1 className="h1name" style={{ fontWeight: 500 }}>
                林偉捷（Jack Lin）
                  </h1>
              {/* <div
                style={{ marginRight: '10px', cursor: 'pointer' }}
                onClick={() => window.open('https://www.facebook.com/WEIJIE.LIN7777', '_blank')}
              >
                <img src="/images/facebook.png" width="20px" />
              </div> */}
              <div style={{ marginRight: '10px', cursor: 'pointer' }}
                onClick={() => window.open('https://www.linkedin.com/in/jack1in', '_blank')}>
                <img src="/images/linkedin.png" width="20px" />
              </div>
              <div style={{ cursor: 'pointer' }}
                onClick={() => window.open('https://line.me/ti/p/0f4vdsbN3Z', '_blank')}>
                <img src="/images/line.png" width="20px" />
              </div>
            </div>
            <div className="logoData">
              I'm Jack Lin, and I have a great enthusiasm for coding. For me, coding is to make life more convenient & to solve problems in life, so I am happy to challenge new things and learn many new skills. Mainly good at front-end and back-end development of web, passionate about pursuing new knowledge, new technologies, enjoying the sense of accomplishment of software development, and being able to quickly find self-positioning in the team.
                </div>
            <br />
            <li className="list">Web Developer</li>
            <li className="list">Taipei，Taiwan</li>
            <li className="list">jack830608@gmail.com</li>
            <li className="list">0983603435</li>
          </div>
          <div className="headPic" />
        </div>
      </div>
    </div>
  );
}
