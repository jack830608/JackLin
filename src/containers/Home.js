import React from 'react';
import Home_C from '../components/Home';
import Animation from '../components/Loading/animation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      op: 1,
    };
  }
  componentDidMount() {
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
    image.src = getBgUrl(document.getElementById('homeBox'));
    image.onload = function () {
      setTimeout(() => document.getElementById('loading').style.opacity = 0, 1500)
      setTimeout(() => document.getElementById('loading').style.display = 'none', 2500)
    };
  }
  render() {
    return (
      <div>
        <Home_C />
        <Animation/>
      </div>
    );
  }
}