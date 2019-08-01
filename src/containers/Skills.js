import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Skills_C from '../components/Skills';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Menu page='Skills' />
        <Banner page='Skills' />
        <Skills_C/>
      </div>
    );
  }
}
