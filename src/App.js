import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Summary from './containers/Summary';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Fion from './containers/Fion';
import ScrollToTop from './components/ScrollToTop';
import './style.scss'

export default (props) => {
  return (
    <Router>
      <ScrollToTop>
        <Route
          exact path="/"
          render={() => <Resume />
          }
        />
        <Route
          path="/fioncard"
          render={() => <Fion />}
        />
      </ScrollToTop>
    </Router>
  );
}