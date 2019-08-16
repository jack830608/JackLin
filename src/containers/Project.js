import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Project from '../components/Project';

export default (props) => {

  return (
    <div>
      <Menu page='Project' />
      <Banner page='Project' />
      <Project />
    </div>
  );
}
