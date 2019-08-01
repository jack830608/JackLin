import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
  }
  componentDidMount() {
    $('.nav').on('touchend', () => {
      $('.animated-icon1').toggleClass('open');
      $('.mobileMenu').slideToggle();
      this.setState({ menuShow: !this.state.menuShow });
      if (this.state.menuShow) {
        $('.frame').css('background-color', 'rgba(255,255,255,1)')
      } else {
        $('.frame').css('background-color', 'rgba(0, 0, 0, 0)')
      }
    });
  }
  render() {
    return (
      <div className="frame">
        <div className="frameSection1">
          <Link to="/">
            <img
              src="images/icon_nobackground.png"
              height="50px"
              style={{ cursor: 'pointer', margin: '0 20px' }}
            />
          </Link>
          <div className="desktopMenu">
            <Link to="/introduction">
              <div className={this.props.page === 'Introduction' ? 'menuR' : 'menu'}>Introduction</div>
            </Link>
            <Link to="/experience">
              <div className={this.props.page === 'Experience' ? 'menuR' : 'menu'}>Experience</div>
            </Link>
            <Link to="/skills">
              <div className={this.props.page === 'Skills' ? 'menuR' : 'menu'}>Skills</div>
            </Link>
            <Link to="/project">
              <div className={this.props.page === 'Project' ? 'menuR' : 'menu'}>Project</div>
            </Link>
            <Link to="/summary">
              <div className={this.props.page === 'Summary' ? 'menuR' : 'menu'}>Summary</div>
            </Link>
          </div>
          <div className="nav">
            <div className="animated-icon1">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="mobileMenu">
          <Link to="/introduction">
            <div className="Mmenu" style={{ background: this.props.page === 'Introduction' ? 'rgba(0,0,0,0.1)' : '' }}>Introduction</div>
          </Link>
          <Link to="/experience">
            <div className="Mmenu" style={{ background: this.props.page === 'Experience' ? 'rgba(0,0,0,0.1)' : '' }}>Experience</div>
          </Link>
          <Link to="/skills">
            <div className="Mmenu" style={{ background: this.props.page === 'Skills' ? 'rgba(0,0,0,0.1)' : '' }}>Skills</div>
          </Link>
          <Link to="/project">
            <div className="Mmenu" style={{ background: this.props.page === 'Project' ? 'rgba(0,0,0,0.1)' : '' }}>Project</div>
          </Link>
          <Link to="/summary">
            <div className="Mmenu" style={{ background: this.props.page === 'Summary' ? 'rgba(0,0,0,0.1)' : '' }}>Summary</div>
          </Link>
        </div>
      </div>
    );
  }
}
