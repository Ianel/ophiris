import React from 'react';

const Hero = () => {
  return (
        <div id="hero" className='lg:p-20 bg-hero-pattern bg-cover bg-no-repeat h-screen flex justify-center items-center lg:justify-end lg:items-center' >
            <div className='w-10/12 bg-slate-200 lg:p-10 p-5 opacity-80'>
                <h1 className='lg:text-6xl lg:mb-4 text-3xl mb-2'>Travel like you're in a <span className='text-primary'>dream</span></h1>
                <p className='lg:text-xl'>We offer premium services to every travellers in order to give them the best
                experiences.</p>
            </div>
        </div>
    );
};

export default Hero;
