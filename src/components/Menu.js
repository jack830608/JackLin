import React, { useState } from 'react';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

export default (props) => {
  const findDistance = useSelector((state) => state.findDistance);
  const dispatch = useDispatch();
  const [menuShow, setMenuShow] = useState(false);
  const MenuAction = () => {
    $('.animated-icon1').toggleClass('open');
    $('.mobileMenu').slideToggle();
    setMenuShow(!menuShow);
    if (!menuShow) {
      $('.frame').css('background-color', 'rgba(21, 21, 21, 0.96)')
    } else {
      $('.frame').css('background-color', 'rgba(0, 0, 0, 0)')
    }
  }
  $(document).scroll(() => {
    if ($(window).scrollTop() > (window.innerHeight - 100)) {
      $('.menu_s').css('height', '70px')
      $('.logo').css('opacity', 1)
    } else if ($(window).scrollTop() < (window.innerHeight - 100)) {
      $('.menu_s').css('height', '0')
      $('.logo').css('opacity', 0)
    }
  });
  const sbot = useSelector((state) => state.sbot);
  if (sbot) {
    const script = document.createElement("script");
    script.src = "https://sbot.ai/chat-bot/bubble.min.js?id=cjnmzdg6a00136tqlvmkxlift";
    script.async = true;
    document.body.appendChild(script);
    dispatch({ type: 'CHECK_SBOT', payload: false });
  }
  return (
    <div className="frame">
      <div className="menu_s" />
      <div className="frameSection1">
        <img src="images/icon_nobackground.png" className="logo" onClick={() => findDistance('Banner')} />
        <div className="desktopMenu">
          <div id="IntroductionMenu" className="menu" onClick={() => findDistance('Introduction')}>Introduction</div>
          <div id="ExperienceMenu" className="menu" onClick={() => findDistance('Experience')}>Experience</div>
          <div id="SkillsMenu" className="menu" onClick={() => findDistance('Skills')}>Skills</div>
          <div id="ProjectMenu" className="menu" onClick={() => findDistance('Project')}>Project</div>
        </div>
        <div className="nav" onTouchEnd={MenuAction}>
          <div className="animated-icon1">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="mobileMenu">
        <div
          className="Mmenu"
          id="IntroductionMmenu"
          onClick={
            () => {
              findDistance('Introduction');
              MenuAction();
            }}
        >
          Introduction
          </div>
        <div
          className="Mmenu"
          id="ExperienceMmenu"
          onClick={
            () => {
              findDistance('Experience');
              MenuAction();
            }}
        >
          Experience
          </div>
        <div
          className="Mmenu"
          id="SkillsMmenu"
          onClick={
            () => {
              findDistance('Skills');
              MenuAction();
            }}
        >
          Skills
          </div>
        <div
          className="Mmenu"
          id="ProjectMmenu"
          onClick={
            () => {
              findDistance('Project');
              MenuAction();
            }}
        >
          Project
          </div>
      </div>
    </div>
  );
}
