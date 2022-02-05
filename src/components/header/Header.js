import React from 'react';
import Hero from '../common/Hero';
import { Navbar } from '../common/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  );  
};

export default Header;