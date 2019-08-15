import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Project_C from '../components/Project';

export default () => {

  return (
    <div>
      <Menu page='Project' />
      <Banner page='Project' />
      <Project_C />
    </div>
  );
}
