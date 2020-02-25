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
    window.addEventListener('scroll',
      () => {
        const Banner = document.getElementById('Banner')
        const BannerTop = Banner.getBoundingClientRect().top;
        const BannerBottom = Banner.getBoundingClientRect().bottom;
        const Introduction = document.getElementById('Introduction')
        const IntroductionMenu = document.getElementById('IntroductionMenu')
        const IntroductionTop = Introduction.getBoundingClientRect().top;
        const IntroductionBottom = Introduction.getBoundingClientRect().bottom;
        const Experience = document.getElementById('Experience')
        const ExperienceMenu = document.getElementById('ExperienceMenu')
        const ExperienceTop = Experience.getBoundingClientRect().top;
        const ExperienceBottom = Experience.getBoundingClientRect().bottom;
        const Skills = document.getElementById('Skills')
        const SkillsMenu = document.getElementById('SkillsMenu')
        const SkillsTop = Skills.getBoundingClientRect().top;
        const SkillsBottom = Skills.getBoundingClientRect().bottom;
        const windowsHeight = window.innerHeight - 500;
        if (BannerTop < windowsHeight && BannerBottom >= 0) {
          Introduction.style.opacity = 0
          Experience.style.opacity = 0
          Skills.style.opacity = 0
          IntroductionMenu.className="menu"
          ExperienceMenu.className="menu"
          SkillsMenu.className="menu"
        }
        if (IntroductionTop < windowsHeight && IntroductionBottom >= 0) {
          Introduction.style.opacity = 1
          Experience.style.opacity = 0
          Skills.style.opacity = 0
          IntroductionMenu.className="menuR"
          ExperienceMenu.className="menu"
          SkillsMenu.className="menu"
        }
        if (ExperienceTop < windowsHeight && ExperienceBottom >= 0 ) {
          Introduction.style.opacity = 0
          Experience.style.opacity = 1
          Skills.style.opacity = 0
          IntroductionMenu.className="menu"
          ExperienceMenu.className="menuR"
          SkillsMenu.className="menu"
        }
        if (SkillsTop < windowsHeight && SkillsBottom >= 0 ) {
          Introduction.style.opacity = 0
          Experience.style.opacity = 0
          Skills.style.opacity = 1
          IntroductionMenu.className="menu"
          ExperienceMenu.className="menu"
          SkillsMenu.className="menuR"
        }
      }
    )
  }, [])
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
