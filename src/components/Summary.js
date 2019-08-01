import React from 'react';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="note">
          <div className="holeHolder">
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
          </div>
          <div style={{ margin: '10px 0 50px 0' }}>
            <div className="summaryTitle1">團隊合作精神</div>
            <div className="summaryData">如上述履歷所示，不管是在結音股份有限公司實習還是到了MemePR都能與設計師＆PM有良好的溝通，並共同完成公司專案。</div>
            <div className="summaryTitle1">獨立作業與思考能力</div>
            <div className="summaryData">如上述履歷所示，我有著豐富的自學能力與獨立作業的經歷，以及跨領域思考與學習能力。</div>
            <div className="summaryTitle1">願意並樂於使用各種工作的工具如 bitbucket、confluence、Jira、sourtree … 等等</div>
            <div className="summaryData">如上述履歷所示專案都是透過 bitbucket、confluence、Jira與團隊夥伴共同協作，並透過 sourcetree 管理 repository
                </div>
            <div className="summaryTitle">兩年左右的Web專案開發經驗</div>
            <div className="summaryData">為了要實現心中理想，從2017年初開始利用業餘時間自學JavaScript、Node.js，並於2017 /
                    09到結音股份有限公司實習，接著成為一名正式的工程師，從事Web相關開發工作至今，完成公司所交代專案，開發過的專案如上述履歷所示。</div>
            <div className="summaryTitle">使用 API 與第三方服務</div>
            <div className="summaryData" style={{ marginBottom: 0 }}>目前串過的第三方服務 :</div>
            <ul style={{ fontSize: '14px', lineHeight: '22px', fontWeight: 300, color: '#454545' }}>
              <li>LINE Message api</li>
              <li>台灣詮力科技 sms api ( 搭配 cronJob 排程功能，定時發送簡訊 )</li>
              <li>Mailgun api、Amazon SES</li>
              <li>Stripe金流 前端授權</li>
            </ul>
            <div className="summaryTitle">能夠迅速釐清問題，用有效的關鍵字搜尋解決方案</div>
            <div className="summaryData">開發專案時會遇到各種問題，為了解掉這些問題，迅速找到問題所在，透過各種關鍵字google、搜尋Stackoverflow、請教別人後所記錄的筆記。</div>
            <div className="summaryTitle">良好的溝通能力，能夠清楚描述單一 commit 更動的內容</div>
            <div className="summaryData">我能站在他人角度，用他人聽得懂的言語來傳達概念與邏輯，並用恰當的文字撰寫筆記。</div>
            <div className="summaryTitle">能夠透過英文吸收新知</div>
            <div className="summaryData">寫程式時也都是用各種英文關鍵字google、搜尋Stackoverflow、閱讀官方文檔 來解掉一路上遇到的難題。</div>
            <img src="/images/icon_nobackground.png" className="noteImg" />
          </div>
        </div>
      </div>
    );
  }
}
