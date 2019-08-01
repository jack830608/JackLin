import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Experience_C from '../components/Experience';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Menu page='Experience' />
        <Banner page='Experience' />
        <Experience_C/>
      </div>
    );
  }
}
