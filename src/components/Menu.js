import React ,{useState}from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery';
import { useSelector , useDispatch} from 'react-redux';

export default (props) => {
  const dispatch = useDispatch();
  const [menuShow , setMenuShow] = useState(false);
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
          $('.menu_s').css('box-shadow', '0 3px 4px -3px #c6c6c6')
        } else if ($(window).scrollTop() < (window.innerHeight - 100)) {
          $('.menu_s').css('height', '0')
          $('.menu_s').css('box-shadow', 'none')
        }
      }
    });
    const sbot = useSelector((state) => state.sbot);
    if(sbot){
      const script = document.createElement("script");
      script.src = "https://sbot.ai/chat-bot/bubble.min.js?id=cjnmzdg6a00136tqlvmkxlift";
      script.async = true;
      document.body.appendChild(script);
      dispatch({type:'CHECK_SBOT', payload: false});
    }
    return (
      <div className="frame">
        <div className="menu_s" />
        <div className="frameSection1">
          <Link to="/">
            <img src="images/icon_nobackground.png" className="logo" />
          </Link>
          <div className="desktopMenu">
            <Link to="/introduction">
              <div className={props.page === 'Introduction' ? 'menuR' : 'menu'}>
                Introduction
                </div>
            </Link>
            <Link to="/experience">
              <div className={props.page === 'Experience' ? 'menuR' : 'menu'}>Experience</div>
            </Link>
            <Link to="/skills">
              <div className={props.page === 'Skills' ? 'menuR' : 'menu'}>Skills</div>
            </Link>
            <Link to="/project">
              <div className={props.page === 'Project' ? 'menuR' : 'menu'}>Project</div>
            </Link>
            <Link to="/summary">
              <div className={props.page === 'Summary' ? 'menuR' : 'menu'}>Summary</div>
            </Link>
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
          <Link to="/introduction">
            <div className="Mmenu" style={{ background: props.page === 'Introduction' ? 'rgba(0,0,0,0.1)' : '' }}>Introduction</div>
          </Link>
          <Link to="/experience">
            <div className="Mmenu" style={{ background: props.page === 'Experience' ? 'rgba(0,0,0,0.1)' : '' }}>Experience</div>
          </Link>
          <Link to="/skills">
            <div className="Mmenu" style={{ background: props.page === 'Skills' ? 'rgba(0,0,0,0.1)' : '' }}>Skills</div>
          </Link>
          <Link to="/project">
            <div className="Mmenu" style={{ background: props.page === 'Project' ? 'rgba(0,0,0,0.1)' : '' }}>Project</div>
          </Link>
          <Link to="/summary">
            <div className="Mmenu" style={{ background: props.page === 'Summary' ? 'rgba(0,0,0,0.1)' : '' }}>Summary</div>
          </Link>
        </div>
      </div>
    );
  }
