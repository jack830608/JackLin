import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Summary from '../components/Summary';

export default (props) => {

  return (
    <div>
      <Menu page='Summary' />
      <Banner page='Summary' />
      <Summary />
    </div>
  );
}
