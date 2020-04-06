import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Animation from '../components/Loading/animation';
import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Project from '../components/Project/';

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
      setTimeout(() => {
        setShow(true)
        document.getElementById('loading').style.opacity = 0
      }, 1500)
      setTimeout(() => document.getElementById('loading').style.display = 'none', 2500)
    };
    window.addEventListener('scroll',
      () => {
        const Banner = document.getElementById('Banner')
        const Introduction = document.getElementById('Introduction')
        const IntroductionMenu = document.getElementById('IntroductionMenu')
        const IntroductionMmenu = document.getElementById('IntroductionMmenu')
        const Experience = document.getElementById('Experience')
        const ExperienceMenu = document.getElementById('ExperienceMenu')
        const ExperienceMmenu = document.getElementById('ExperienceMmenu')
        const Project = document.getElementById('Project')
        const ProjectMenu = document.getElementById('ProjectMenu')
        const ProjectMmenu = document.getElementById('ProjectMmenu')
        const Skills = document.getElementById('Skills')
        const SkillsMenu = document.getElementById('SkillsMenu')
        const SkillsMmenu = document.getElementById('SkillsMmenu')
        const Logo = document.querySelector('.logo')
        const Menu = document.querySelector('.desktopMenu')
        const Frame = document.querySelector('.frameSection')
        if (Banner &&
          Introduction && IntroductionMenu && IntroductionMmenu &&
          Experience && ExperienceMenu && ExperienceMmenu &&
          Project && ProjectMenu && ProjectMmenu &&
          Skills && SkillsMenu && SkillsMmenu
        ) {
          const BannerTop = Banner.getBoundingClientRect().top;
          const BannerBottom = Banner.getBoundingClientRect().bottom;
          const IntroductionTop = Introduction.getBoundingClientRect().top;
          const IntroductionBottom = Introduction.getBoundingClientRect().bottom;
          const ExperienceTop = Experience.getBoundingClientRect().top;
          const ExperienceBottom = Experience.getBoundingClientRect().bottom;
          const SkillsTop = Skills.getBoundingClientRect().top;
          const SkillsBottom = Skills.getBoundingClientRect().bottom;
          const ProjectTop = Project.getBoundingClientRect().top;
          const ProjectBottom = Project.getBoundingClientRect().bottom;
          const windowsHeight = window.innerHeight - 500;
          if (BannerTop < windowsHeight && BannerBottom >= 0) {
            Logo.style.transform = 'scale(0.9)'
            Menu.style.transform = 'scale(0.9)'
            Frame.style.opacity = 0.6
            Introduction.style.opacity = 0
            Experience.style.opacity = 0
            Skills.style.opacity = 0
            Project.style.opacity = 0
            IntroductionMenu.className = "menu"
            ExperienceMenu.className = "menu"
            SkillsMenu.className = "menu"
            ProjectMenu.className = "menu"
            IntroductionMmenu.style.background = ''
            ExperienceMmenu.style.background = ''
            SkillsMmenu.style.background = ''
            ProjectMmenu.style.background = ''
          }
          if (IntroductionTop < windowsHeight && IntroductionBottom >= 0) {
            Logo.style.transform = 'scale(1)'
            Menu.style.transform = 'scale(1)'
            Frame.style.opacity = 1
            Introduction.style.opacity = 1
            Experience.style.opacity = 0
            Skills.style.opacity = 0
            Project.style.opacity = 0
            IntroductionMenu.className = "menuR"
            ExperienceMenu.className = "menu"
            SkillsMenu.className = "menu"
            ProjectMenu.className = "menu"
            IntroductionMmenu.style.background = 'rgba(255,255,255,0.1)'
            ExperienceMmenu.style.background = ''
            SkillsMmenu.style.background = ''
            ProjectMmenu.style.background = ''
          }
          if (ExperienceTop < windowsHeight && ExperienceBottom >= 0) {
            Logo.style.transform = 'scale(1)'
            Menu.style.transform = 'scale(1)'
            Frame.style.opacity = 1
            Introduction.style.opacity = 0
            Experience.style.opacity = 1
            Skills.style.opacity = 0
            Project.style.opacity = 0
            IntroductionMenu.className = "menu"
            ExperienceMenu.className = "menuR"
            SkillsMenu.className = "menu"
            ProjectMenu.className = "menu"
            IntroductionMmenu.style.background = ''
            ExperienceMmenu.style.background = 'rgba(255,255,255,0.1)'
            SkillsMmenu.style.background = ''
            ProjectMmenu.style.background = ''
          }
          if (SkillsTop < windowsHeight && SkillsBottom >= 0) {
            Logo.style.transform = 'scale(1)'
            Menu.style.transform = 'scale(1)'
            Frame.style.opacity = 1
            Introduction.style.opacity = 0
            Experience.style.opacity = 0
            Skills.style.opacity = 1
            Project.style.opacity = 0
            IntroductionMenu.className = "menu"
            ExperienceMenu.className = "menu"
            SkillsMenu.className = "menuR"
            ProjectMenu.className = "menu"
            IntroductionMmenu.style.background = ''
            ExperienceMmenu.style.background = ''
            SkillsMmenu.style.background = 'rgba(255,255,255,0.1)'
            ProjectMmenu.style.background = ''
          }
          if (ProjectTop < windowsHeight && ProjectBottom >= 0) {
            Logo.style.transform = 'scale(1)'
            Menu.style.transform = 'scale(1)'
            Frame.style.opacity = 1
            Introduction.style.opacity = 0
            Experience.style.opacity = 0
            Skills.style.opacity = 0
            Project.style.opacity = 1
            IntroductionMenu.className = "menu"
            ExperienceMenu.className = "menu"
            SkillsMenu.className = "menu"
            ProjectMenu.className = "menuR"
            IntroductionMmenu.style.background = ''
            ExperienceMmenu.style.background = ''
            SkillsMmenu.style.background = ''
            ProjectMmenu.style.background = 'rgba(255,255,255,0.1)'
          }
        }
      }
    )
  }, [])
  return (
    <div className="container">
      <Animation />
      <Menu />
      <Banner show={show} />
      {show && <Introduction />}
      {show && <Experience />}
      {show && <Skills />}
      {show && <Project />}
    </div>
  );
}
