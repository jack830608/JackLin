import React from 'react';
export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
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
                    林偉捷（Jack Lin
                          </h1>
                  <div
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                    onClick={() => window.open('https://www.facebook.com/WEIJIE.LIN7777', '_blank')}
                  >
                    <img src="/images/facebook.png" width="20px" />
                  </div>
                  <div style={{ cursor: 'pointer' }}
                    onClick={() => window.open('https://line.me/ti/p/0f4vdsbN3Z', '_blank')}>
                    <img src="/images/line.png" width="20px" />
                  </div>
                </div>
                <div className="logoData">
                  我是林偉捷，對於 Coding 抱持很大的熱誠；對於我來說，寫程式是為了讓生活更便利＆解決生活遇到的問題，所以我很樂於挑戰於一些新的事物，也很樂於學習更多的新技能。主要擅長於網頁的前後端開發，熱衷於追求新知識、新的技術，享受軟體開發完成的成就感，並能夠在團隊中快速找到自我定位。
                    </div>
                <br />
                <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0 10px 0' }}>
                  <img src="/images/settings.png" width="20px" />
                  <span style={{ margin: '3px 10px', fontSize: '12px', color: 'rgba(255,255,255, 0.8)' }}>
                    Web Developer
                        </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'rgba(255,255,255, 0.8)' }}>
                  <img src="/images/location.png" width="20px" />
                  <span style={{ margin: '3px 10px', fontSize: '12px' }}>Taipei，Taiwan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src="/images/gmail.png" width="20px" />
                  <a href="mailto:jack830608@gmail.com"
                    style={{ textDecoration: 'none', color: 'rgba(255,255,255, 0.8)', margin: '3px 10px', fontSize: '12px' }}>
                    jack830608@gmail.com
                        </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/images/phone.png" width="25px" />
                  <a href="tel:0983603435"
                    style={{ textDecoration: 'none', color: 'rgba(255,255,255, 0.8)', margin: '3px 8px', fontSize: '12px' }}>
                    0983603435
                  </a>
                </div>
              </div>
              <div className="headPic" />
            </div>
          </div>
        </div>
    );
  }
}
