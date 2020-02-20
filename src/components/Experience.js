import React from 'react';

export default (props) => {

  return (
    <div className="container" id="container">
      <div>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie">
            </div>

            <div className="cd-timeline-content">
              <h2>結音股份有限公司
                    <a
                  href="https://www.injiaoyun.com/jack.html"
                  className="link"
                  style={{ fontSize: '16px', marginLeft: '5px' }}
                  target="blank"
                >
                  Recommendation Letter
                  </a>
              </h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title" style={{marginRight: "10px"}}>
                  Back-end 
                  </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true">
                  2017-09 ~ 2018-06
                  </i>
                </span>
              </div>
              <p>I have experienced a completely different corporate culture and agile spirit than the previous company, and always thinks about the balance between efficiency and quality. It can quickly bring products to market while ensuring the replacement of product value. The process of verifying whether it meets the needs of customers is essentially a baptism of flames, giving me a new understanding of teamwork, and making me more accountable.</p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Node.js、Express Framework</li>
                <li>MongoDB、Mongoose</li>
                <li>Angular.js (1.x)</li>
              </ul>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
            </div>

            <div className="cd-timeline-content">
              <h2>潮語傳媒股份有限公司(MemePR)</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title" style={{marginRight: "10px"}}>
                  Front-end
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true">
                  2018-06 ~ 2019-08
                  </i>
                </span>
              </div>
              <p>Since the love of AI had entered MemePR, there is no difference in seniority here, As long as what is done is right, it can be played. Finally with the efforts of everyone, we have successfully created our first chatbot
                  <a
                  href="https://www.sbot.ai"
                  className="link"
                  target="blank"
                  style={{ marginLeft: '5px' }}
                >
                  Sbot
                    </a>
                。</p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>React、Redux、Styled Components</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
          <div className="cd-timeline-block" >
            <div className="cd-timeline-img cd-picture">
            </div>

            <div className="cd-timeline-content">
              <h2>Tripmoment時刻旅行</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title" style={{marginRight: "10px"}}>
                  Front-end
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true">
                  2019-08 ~  2019-11
                  </i>
                  </span>
              </div>
              <p>
                During the time at the Tripmoment, I have been responsible for more thing ,including Front-end and Back-end. It also let me to learn more technology and continue to help company develop new products.
                  </p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React、Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>ejs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="cd-timeline-block" >
            <div className="cd-timeline-img cd-picture">
            </div>

            <div className="cd-timeline-content">
              <h2>Vpon</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title" style={{marginRight: "10px"}}>
                  Software Engineer
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true">
                  2019-11 ~  Now
                  </i>
                  </span>
              </div>
              <p>
                Vpon is an advertising company combining big data ,for me it's completely different from my previous job. There are more then 70 engineers in Vpon so we can exchange skills with each other and exposed to many new skills not limited to the front-end.
                  </p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Docker</li>
                <li>MySQL</li>
                <li>Shell script</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
