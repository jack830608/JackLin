import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Introduction from './containers/Introduction';
import Experience from './containers/Experience';
import Project from './containers/Project';
import Skills from './containers/Skills';
import Summary from './containers/Summary';
import Home from './containers/Home';
import ScrollToTop from './components/ScrollToTop'
import  './style.css'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
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
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Project} />
          <Route path="/skills" component={Skills} />
          <Route path="/summary" component={Summary} />
        </ScrollToTop>
      </Router>
    );

  }
}