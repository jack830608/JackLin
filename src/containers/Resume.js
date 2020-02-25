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
  return (
    <div>
      <Animation />
      <Menu/>
      <Banner show={show}/>
      <Introduction/>
      <Experience/>
      <Skills/>
    </div>
  );
}
