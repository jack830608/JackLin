import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Introduction_C from '../components/Introduction';

export default () => {
  return (
    <div>
      <Menu page='Introduction' />
      <Banner page='Introduction' />
      <Introduction_C />
    </div>
  );
}
