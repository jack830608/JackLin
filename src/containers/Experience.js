import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Experience_C from '../components/Experience';

export default () => {
  return (
    <div>
      <Menu page='Experience' />
      <Banner page='Experience' />
      <Experience_C />
    </div>
  );
}
