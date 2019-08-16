import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Skills from '../components/Skills';

export default (props) => {

  return (
    <div>
      <Menu page='Skills' />
      <Banner page='Skills' />
      <Skills />
    </div>
  );
}
