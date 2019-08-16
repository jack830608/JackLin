import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Experience from '../components/Experience';

export default (props) => {

  return (
    <div>
      <Menu page='Experience' />
      <Banner page='Experience' />
      <Experience />
    </div>
  );
}
