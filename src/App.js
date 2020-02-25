import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from './containers/Resume';
import Fion from './containers/Fion';
import './style.scss'

export default (props) => {
  return (
    <Router>
        <Route
          exact path="/"
          render={() => <Resume />
          }
        />
        <Route
          path="/fioncard"
          render={() => <Fion />}
        />
    </Router>
  );
}