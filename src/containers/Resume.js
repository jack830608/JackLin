import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Animation from '../components/Loading/animation';
import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

export default (props) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    function getBgUrl(el) {
      let bg = "";
      if (el.currentStyle) { // IE
        bg = el.currentStyle.backgroundImage;
      } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
        bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
      } else { // try and get inline style
        bg = el.style.backgroundImage;
      }
      return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
    }

    let image = document.createElement('img');
    image.src = getBgUrl(document.querySelector('.filter'));
    image.onload = function () {
      setTimeout(() => document.getElementById('loading').style.opacity = 0, 1500)
      setTimeout(() => {
        document.getElementById('loading').style.display = 'none'
        setShow(true)
      }, 2500)
    };
  })
  useEffect(() => {
    window.addEventListener('scroll',
      () => {
        if (document.getElementById('Introduction')) {
          const IntroductionTop = document.getElementById('Introduction').getBoundingClientRect().top;
          const IntroductionBottom = document.getElementById('Introduction').getBoundingClientRect().bottom;
          const windowsHeight = window.innerHeight - 500;
          if (IntroductionTop < windowsHeight && IntroductionBottom >= 0) {
            document.getElementById('Introduction').style.opacity = 1
          } else if (IntroductionBottom < 0) {
            document.getElementById('Introduction').style.opacity = 0
          }
        }
        if (document.getElementById('Experience')) {
          const ExperienceTop = document.getElementById('Experience').getBoundingClientRect().top;
          const ExperienceBottom = document.getElementById('Experience').getBoundingClientRect().bottom;
          const windowsHeight = window.innerHeight - 500;
          if (ExperienceTop < windowsHeight && ExperienceBottom >= 0) {
            document.getElementById('Experience').style.opacity = 1
          } else if (ExperienceBottom < 0) {
            document.getElementById('Experience').style.opacity = 0
          }
        }
        if (document.getElementById('Skills')) {
          const SkillsTop = document.getElementById('Skills').getBoundingClientRect().top;
          const SkillsBottom = document.getElementById('Skills').getBoundingClientRect().bottom;
          const windowsHeight = window.innerHeight - 500;
          if (SkillsTop < windowsHeight && SkillsBottom >= 0) {
            document.getElementById('Skills').style.opacity = 1
          } else if (SkillsBottom < 0) {
            document.getElementById('Skills').style.opacity = 0
          }
        }
      }
    )
  })
  return (
    <div>
      <Animation />
      <Menu />
      <Banner show={show} />
      <Introduction />
      <Experience />
      <Skills />
    </div>
  );
}
