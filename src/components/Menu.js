import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

export default (props) => {
  const findDistance = (section) => {
    if (section && document.getElementById(section)) {
      window.scrollTo({ 'behavior': 'smooth', 'top': document.getElementById(section).offsetTop })
    }
  }
  const dispatch = useDispatch();
  const [menuShow, setMenuShow] = useState(false);
  const MenuAction = () => {
    $('.animated-icon1').toggleClass('open');
    $('.mobileMenu').slideToggle();
    setMenuShow(!menuShow);
    if (!menuShow) {
      $('.frame').css('background-color', 'rgba(255,255,255,1)')
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
          <div className="menu" onClick={() => findDistance('Introduction')}>Introduction</div>
          <div className="menu" onClick={() => findDistance('Experience')}>Experience</div>
          <div className="menu" onClick={() => findDistance('Skills')}>Skills</div>
          <div className="menu" onClick={() => findDistance('Project')}>Project</div>
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
          onClick={() => findDistance('Introduction')}
        >
          Introduction
          </div>
        <div
          className="Mmenu"
          style={{ background: props.page === 'Experience' ? 'rgba(0,0,0,0.1)' : '' }}
          onClick={() => findDistance('Experience')}
        >
          Experience
          </div>
        <div
          className="Mmenu"
          style={{ background: props.page === 'Skills' ? 'rgba(0,0,0,0.1)' : '' }}
          onClick={() => findDistance('Skills')}
        >
          Skills
          </div>
        <div
          className="Mmenu"
          style={{ background: props.page === 'Project' ? 'rgba(0,0,0,0.1)' : '' }}
          onClick={() => findDistance('Project')}
        >
          Project
          </div>
      </div>
    </div>
  );
}
