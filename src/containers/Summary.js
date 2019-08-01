import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Summary_C from '../components/Summary';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Menu page='Summary' />
        <Banner page='Summary' />
        <Summary_C/>
      </div>
    );
  }
}
