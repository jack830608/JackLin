import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';

export default (props) => {

  return (
    <div>
      <Menu page='Introduction' />
      <Banner page='Introduction' />
      <Introduction />
    </div>
  );
}
