import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import Skills_C from '../components/Skills';

export default () => {
  return (
    <div>
      <Menu page='Skills' />
      <Banner page='Skills' />
      <Skills_C />
    </div>
  );
}
