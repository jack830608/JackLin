import React, { useEffect, useState } from 'react';

export default (props) => {
  const [word, setWord] = useState('')
  const [animation, setAnimation] = useState('none')
  useEffect(() => {
    if (props.show) {
      setTimeout(() => setWord(`I`), 0)
      setTimeout(() => setWord('I\''), 300)
      setTimeout(() => setWord('I\'m'), 600)
      setTimeout(() => setWord('I\'m J'), 900)
      setTimeout(() => setWord('I\'m Ja'), 1200)
      setTimeout(() => setWord('I\'m Jac'), 1500)
      setTimeout(() => setWord('I\'m Jack'), 1800)
      setTimeout(() => setWord('I\'m Jackl'), 2100)
      setTimeout(() => setWord('I\'m Jackli'), 2400)
      setTimeout(() => setWord('I\'m Jacklin'), 2700)
      setTimeout(() => {
        setWord('I\'m Jacklin.')
        setAnimation('Line 1s infinite ease-in-out')
      }, 3000)
    }
  }, [props.show])
  return (
    <div>
      <div class="allBanner">
        <div class="allFilter">
          <div class="allWord">
            {word}<span class="allLine" style={{ animation: animation }}>｜</span>
            <div class="allBox">
              <a href="https://www.facebook.com/WEIJIE.LIN7777" target="_blank">
                <img src="/images/all_facebook.svg"></img>
              </a>
              <a href="https://www.linkedin.com/in/jack1in/" target="_blank">
                <img src="/images/all_linkedin.svg"></img>
              </a>
              <a href="https://github.com/jack830608" target="_blank">
                <img src="/images/all_github.svg"></img>
              </a>
              <a href="https://line.me/ti/p/0f4vdsbN3Z" target="_blank">
                <img src="/images/all_line.svg"></img>
              </a>
              <a href="mailto:jack830608@gmail.com" target="_blank">
                <img src="/images/all_google.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="allMouse">
        <div class="allMouseBall"></div>
      </div>
    </div>
  );
}
