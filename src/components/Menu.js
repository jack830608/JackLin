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
      $('.frame').css('box-shadow', '0 4px 8px 0 rgba(12,0,51,0.1)')
    } else {
      $('.frame').css('background-color', 'rgba(0, 0, 0, 0)')
      $('.frame').css('box-shadow', 'none')
    }
  }
  $(document).scroll(() => {
    if (window.innerWidth > 768) {
      if ($(window).scrollTop() > (window.innerHeight - 100)) {
        $('.menu_s').css('height', '70px')
      } else if ($(window).scrollTop() < (window.innerHeight - 100)) {
        $('.menu_s').css('height', '0')
      }
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
          style={{ background: props.page === 'Introduction' ? 'rgba(0,0,0,0.1)' : '' }}
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
          style={{ background: props.page === 'Experience' ? 'rgba(0,0,0,0.1)' : '' }}
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
          style={{ background: props.page === 'Skills' ? 'rgba(0,0,0,0.1)' : '' }}
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
          style={{ background: props.page === 'Project' ? 'rgba(0,0,0,0.1)' : '' }}
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
