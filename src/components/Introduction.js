import React from 'react';
export default () => {
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
