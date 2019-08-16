import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Introduction from './containers/Introduction';
import Experience from './containers/Experience';
import Project from './containers/Project';
import Skills from './containers/Skills';
import Summary from './containers/Summary';
import Home from './containers/Home';
import Fion from './containers/Fion';
import ScrollToTop from './components/ScrollToTop';
import './style.scss'

export default (props) => {

  useEffect(() => {
    window.addEventListener('scroll',
      () => {
        if (document.getElementById('container')) {
          let distance = document.getElementById('container').getBoundingClientRect().top;
          const windowsHeight = window.innerHeight - 300;
          if (distance < windowsHeight) {
            if (document.getElementById('container').style.backgroundImage) {
              document.getElementById('container').style.transform = "skewY(-5deg) translateX(0)"
              document.getElementById('container').style.opacity = 1
            } else {
              document.getElementById('container').style.transform = "translateX(0)"
              document.getElementById('container').style.opacity = 1
            }

          }
        }
      }
    )
  })

  return (
    <Router>
      <ScrollToTop>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          path="/introduction"
          render={() => <Introduction />}
        />
        <Route
          path="/experience"
          render={() => <Experience />}
        />
        <Route
          path="/project"
          render={() => <Project />}
        />
        <Route
          path="/skills"
          render={() => <Skills />}
        />
        <Route
          path="/summary"
          render={() => <Summary />}
        />
        <Route
          path="/fioncard"
          render={() => <Fion />}
        />
      </ScrollToTop>
    </Router>
  );
}