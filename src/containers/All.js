import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import All from '../components/All';
import Animation from '../components/Loading/animation';

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
    image.src = getBgUrl(document.querySelector('.allFilter'));
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
      <Menu page='Skills' />
      <All show={show}/>
      <Animation />
    </div>
  );
}
