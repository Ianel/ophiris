import React from 'react';
import ImportExport from '../../components/import/ImportExport';
import Investment from '../../components/investment/Investment';
import Tours from '../../components/tours/Tours';
import Training from '../../components/training/Training';

const Home = () => {
  return (
    <section>
        <Tours />
        <Investment />
        <ImportExport />
        <Training />
    </section>
  );
};

export default Home;
