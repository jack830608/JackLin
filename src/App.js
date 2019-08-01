import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Introduction from './containers/Introduction';
import Experience from './containers/Experience';
import Project from './containers/Project';
import Skills from './containers/Skills';
import Summary from './containers/Summary';
import Home from './containers/Home';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Project} />
          <Route path="/skills" component={Skills} />
          <Route path="/summary" component={Summary} />
      </Router>
    );

  }
}