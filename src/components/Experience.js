import React from 'react';

export default (props) => {

  return (
    <div className="container" id="container">
      <div>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block" style={{ opacity: 0.5 }}>
            <div className="cd-timeline-img cd-picture">
            </div>

            <div className="cd-timeline-content">
              <h2>全漢企業股份有限公司</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  安規工程師
                            </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  2016 年 11 月 - 2017 年 12 月
                            </span>
              </div>
              <p>在全漢工作期間我學習到了團隊合作以及與上司充分溝通的重要性。
                  3月開始利用空閒時間學習程式語言相關知識，並且承蒙朋友介紹，於7月實際參與開發台南樁腳網站，9月開始利用下班時間與休假時間，在結音股份有限公司實習，並於隔年1月成為正式工程師。
                  </p>

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
                  style={{ fontSize: '16px', marginLeft: '5px' }}
                  target="blank"
                >
                  推薦信
                  </a>
              </h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  後端工程師
                            </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  2017 年 9 月 - 2018 年 6 月
                            </span>
              </div>
              <p>在結音股份有限公司體驗到了與前公司截然不同的企業文化，敏捷的精神，並且時時刻刻思考效率與品質間的平衡，在確保產品價值的前提下，能夠快速的讓產品推向市場，驗證是否符合客戶需求，這樣的過程如同火焰洗禮一般，讓我對團隊合作有了全新的認識，也讓我更勇於承擔責任。
                        </p>
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
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  前端工程師
                            </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  2018 年 6 月 -  2019 年 8 月
                            </span>
              </div>
              <p>因為對人工智慧的熱愛進入了MemePR，在這裡沒有職位大小區分，只要做的事是對的就可以無限發揮，在大家的努力下也成功打造出我們的第一隻聊天機器人
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
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  前端工程師
                            </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  2019 年 8 月 -  至今
                            </span>
              </div>
              <p>在時刻旅行這段時間負責的事更多了，前端後端都包，也讓我學到更扎實的技術，並且也持續幫助公司開發新產品。
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
        </section>
      </div>
    </div>
  );
}
