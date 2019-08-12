import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Project_C from '../components/Project';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Menu page='Project' {...this.props}/>
        <Banner page='Project' />
        <Project_C/>
        </div>
        );
      }
    }
