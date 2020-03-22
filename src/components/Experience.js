import React from 'react';

export default (props) => {

  return (
    <div className="Experience">
      <div id="Experience">
        <div className={'experienceTitle'}>
          <h1>
            Experience
        </h1>
        </div>
        <div className="experienceBox">
          <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block" >
              <div className="cd-timeline-img cd-picture">
              </div>

              <div className="cd-timeline-content">
                <h2>Vpon - 威朋大數據集團</h2>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title" style={{ marginRight: "10px" }}>
                    Software Engineer
                </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2019-10 ~  Now
                  </i>
                  </span>
                </div>
                <p>
                  Vpon is an advertising company combining big data ,for me it's completely different from my previous job. There are more than 70 engineers in Vpon so we can exchange skills with each other and exposed to many new skills not limited to the front-end.
                  </p>
              </div>
            </div>
            <div className="cd-timeline-block" >
              <div className="cd-timeline-img cd-picture">
              </div>

              <div className="cd-timeline-content">
                <h2>Tripmoment - 時刻旅行</h2>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title" style={{ marginRight: "10px" }}>
                    Front-end
                </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2019-07 ~  2019-10
                  </i>
                  </span>
                </div>
                <p>
                  During the time at the Tripmoment, I have been responsible for more things ,including Front-end and Back-end. It also let me learn more skill and continue to help the company develop new products.
                  </p>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
              </div>

              <div className="cd-timeline-content">
                <h2>MemePR - 潮語傳媒股份有限公司</h2>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title" style={{ marginRight: "10px" }}>
                    Front-end
                </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2018-06 ~ 2019-07
                  </i>
                  </span>
                </div>
                <p>Since the love of AI had entered MemePR, there is no difference in seniority here, As long as what is done is right, it can be played. Finally, with the efforts of everyone, we have successfully created our first chatbot
                  <a
                    href="https://www.sbot.ai"
                    className="link"
                    target="blank"
                    style={{ marginLeft: '5px' }}
                  >
                    Sbot
                    </a>
                  。</p>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
              </div>
              <div className="cd-timeline-content">
                <h2>結音股份有限公司
                <a
                    href="https://www.injiaoyun.com/jack.html"
                    className="link"
                    style={{marginLeft: '5px' }}
                    target="blank"
                  >
                    Recommendation Letter
                </a>
                </h2>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title" style={{ marginRight: "10px" }}>
                    Back-end
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true">
                      2017-09 ~ 2018-06
                  </i>
                  </span>
                </div>
                <p>I have experienced a completely different corporate culture and agile spirit than the previous company and always thinks about the balance between efficiency and quality. It can quickly bring products to the market while ensuring the replacement of product value. The process of verifying whether it meets the needs of customers is essentially a baptism of flames, giving me a new understanding of teamwork, and making me more accountable.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
