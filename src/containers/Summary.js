import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Summary_C from '../components/Summary';

export default () => {
  return (
    <div>
      <Menu page='Summary' />
      <Banner page='Summary' />
      <Summary_C />
    </div>
  );
}
