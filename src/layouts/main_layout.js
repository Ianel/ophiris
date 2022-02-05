import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const MainLayout = ({ children }) => {
  return (
      <>
        <Header />
        {children}
        <Footer />
      </>
  );
};

export default MainLayout;
