import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div className="container" id="container">
          <div className="webBox" style={{ marginTop: 0 }}>
            <div className="WebBrowser" onClick={() => window.open('https://www.injiaoyun.com', '_blank')}>
              <div className="UrlSection">
                <div className="DotHolder">
                  <div className="Dot" style={{ background: '#EF7A97' }} />
                  <div className="Dot" />
                  <div className="Dot" />
                </div>
                <div className="Url">
                  https://www.injiaoyun.com
                    </div>
              </div>
              <div className="Web">
                <img src="/images/project/injiaoyun.png" width="100%" />
              </div>
            </div>
            <div className="webData">
              這是我進入軟體業的第一個參與的專案，非常感謝結音股份有限公司的老闆願意花時間栽培我，帶著我一步一步慢慢摸索，主要負責小型功能的開發，前端UI調整，第三方API串接。
            </div>
          </div>
          <div className="webBoxR">
            <div className="webData">
              此案為我第一個獨立完成的專案，主要是給美容美甲業的預約系統，店家可以在後台設定分店、營業時間、店休日期；客戶則可以在line上完成預約，並且查看訂單狀況。
            </div>
            <div className="WebBrowser" onClick={() => window.open('https://api.lifegoez.com/admin/signin', '_blank')}>
              <div className="UrlSection">
                <div className="DotHolder">
                  <div className="Dot" />
                  <div className="Dot" style={{ background: '#878787' }} />
                  <div className="Dot" />
                </div>
                <div className="Url">
                  https://api.lifegoez.com
                    </div>
              </div>
              <div className="Web">
                <img src="/images/project/beauty_line_bot.png" width="100%" />
              </div>
            </div>
          </div>
          <div className="webBox">
            <div className="WebBrowser" onClick={() => window.open('https://www.sbot.ai', '_blank')}>
              <div className="UrlSection">
                <div className="DotHolder">
                  <div className="Dot" />
                  <div className="Dot" />
                  <div className="Dot" style={{ background: '#2047CC' }} />
                </div>
                <div className="Url">
                  https://www.sbot.ai
                    </div>
              </div>
              <div className="Web">
                <img src="/images/project/sbot.png" width="100%" />
              </div>
            </div>
            <div className="webData">
              這是我參與過最大的專案，目前也已經正式上線，幾乎整個Sbot的前端頁面都是我負責，雖然主要是負責前端，但因公司人手較緊湊，連金流串接，API開發等等都有參與。
            </div>
          </div>
          <div className="webBoxR" style={{ borderBottom: 'none' }}>
            <div className="webData">
              雖然MemePR的第一版開發我沒參與到，但目前線上的新版本前端都是我一手包辦
            </div>
            <div className="WebBrowser" onClick={() => window.open('https://www.memepr.com', '_blank')}>
              <div className="UrlSection">
                <div className="DotHolder">
                  <div className="Dot" style={{ background: '#EF7A97' }} />
                  <div className="Dot" />
                  <div className="Dot" />
                </div>
                <div className="Url">
                  https://www.memepr.com
                    </div>
              </div>
              <div className="Web">
                <img src="/images/project/memepr.png" width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="gitBook">
          <img src="/images/gitbook.png" className="gitBookLogo"/>
            <div className="category">
              <div style={{ marginBottom: '20px' }} className="gitBookSelect">
                <a
                  href="https://jack1in.gitbook.io/font-end/"
                  target="blank"
                  style={{ color: '#FFF', display: 'flex', alignItems: 'center' }}
                >
                  <div>Front-End</div>
                </a>
              </div>
              <div style={{ marginTop: '20px' }} className="gitBookSelect">
                <a href="https://jacklin.gitbook.io/back-end/" target="blank"
                  style={{ color: '#FFF', display: 'flex', alignItems: 'center' }}>
                  <div>Back-End</div>
                </a>
              </div>
            </div>
        </div>
        </div>
        );
      }
    }