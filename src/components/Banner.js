import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default (props) => {
  const findDistance = useSelector((state) => state.findDistance);
  const [word, setWord] = useState('')
  const [icon, setIcon] = useState(0)
  const [animation, setAnimation] = useState('none')
  useEffect(() => {
    if (props.show) {
      setTimeout(() => setWord(`I`), 0)
      setTimeout(() => setWord('I\''), 250)
      setTimeout(() => setWord('I\'m'), 500)
      setTimeout(() => setWord('I\'m J'), 750)
      setTimeout(() => setWord('I\'m Ja'), 1000)
      setTimeout(() => setWord('I\'m Jac'), 1250)
      setTimeout(() => setWord('I\'m Jack'), 1500)
      setTimeout(() => setWord('I\'m Jackl'), 1750)
      setTimeout(() => setWord('I\'m Jackli'), 2000)
      setTimeout(() => setWord('I\'m Jacklin'), 2250)
      setTimeout(() => {
        setWord('I\'m Jacklin.')
        setAnimation('Line 1s infinite ease-in-out')
        setIcon(1)
      }, 2500)
    }
  }, [props.show])
  return (
    <div id="Banner">
      <div class="filter">
        <div class="head">
          <div class="word">
            {word}
            <span class="wordLine" style={{ animation: animation }}>｜</span>
            <div class="iconBox" style={{ opacity: icon }}>
              <a href="https://www.facebook.com/WEIJIE.LIN7777" target="_blank">
                <img src="/images/all_facebook.svg"/>
              </a>
              <a href="https://www.linkedin.com/in/jack1in/" target="_blank">
                <img src="/images/all_linkedin.svg"/>
              </a>
              <a href="https://github.com/jack830608" target="_blank">
                <img src="/images/all_github.svg"/>
              </a>
              <a href="https://line.me/ti/p/0f4vdsbN3Z" target="_blank">
                <img src="/images/all_line.svg"/>
              </a>
              <a href="mailto:jack830608@gmail.com" target="_blank">
                <img src="/images/all_google.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mouse" onClick={()=>findDistance('Introduction')}>
        <div class="mouseBall"/>
      </div>
    </div>
  );
}
