import React from 'react';

export default (props) => {
  const findDistance = (section) => {
    if (document.getElementById(section)) {
      for (let i = window.pageYOffset; i < document.getElementById(section).offsetTop; i++) {
        setTimeout(() => window.scrollTo(0, i), i / 3);
      }
    }
  }
  return (
    <div className={props.page}>
      <h1>
        {props.page}
      </h1>
      <h2 onClick={() => findDistance('container')}>
        <div className="Mouse">
          <div
            className="MouseDown"
            style={{ background: `url(/images/${props.page}.jpg) center top no-repeat`}}
          >
          </div>
        </div>
      </h2>
    </div>
  );
}
