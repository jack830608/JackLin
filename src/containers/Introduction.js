import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Introduction_C from '../components/Introduction';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Menu page='Introduction'{...this.props} />
        <Banner page='Introduction' />
        <Introduction_C/>
      </div>
    );
  }
}
