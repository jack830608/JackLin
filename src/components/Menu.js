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
      $('.frame').css('background-color', 'rgba(21, 21, 21, 0.97)')
    } else {
      $('.frame').css('background-color', 'rgba(0, 0, 0, 0)')
    }
  }
  $(document).scroll(() => {
    var h = document.body.scrollHeight - $(window).height()
    var c = $(document).scrollTop();
    $('.process').css('width', `${c / h * 100}vw`)
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
    <div>
      <div className="process" />
      <div className="frame">
        <div className="frameSection">
          <img src="images/icon_nobackground.png" className="logo" onClick={() => findDistance('Banner')} />
          <div className="desktopMenu">
            <div id="IntroductionMenu" className="menu" onClick={() => findDistance('Introduction')}>INTRODUCTION</div>
            <div id="ExperienceMenu" className="menu" onClick={() => findDistance('Experience')}>EXPERIENCE</div>
            <div id="SkillsMenu" className="menu" onClick={() => findDistance('Skills')}>SKILLS</div>
            <div id="ProjectMenu" className="menu" onClick={() => findDistance('Project')}>PROJECT</div>
            <div id="BlogMenu" className="menuB" onClick={() => window.open('https://www.jack1in.blog','_blank')}>BLOG</div>
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
            INTRODUCTION
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
            EXPERIENCE
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
            SKILLS
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
            PROJECT
          </div>
          <div
            className="Mmenu"
            id="BlogMmenu"
            style={{color:'#798DDD',fontWeight: 'bold'}}
            onClick={
              () => {
                MenuAction();
                window.open('https://www.jack1in.blog','_blank');
              }}
          >
            BLOG
          </div>
        </div>
      </div>
    </div>
  );
}
