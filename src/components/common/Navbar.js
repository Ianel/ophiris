import { faBars, faPhoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logoOphir from '../../assets/images/logo-PNG.png';

export const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
  return (
      <>
      <div className={`flex justify-between items-center py-3 px-10 lg:hidden ${isClicked ? 'shadow-none' : 'shadow'}`}>
        <img className='w-20' src={logoOphir} alt="Logo Ophir" />
        { isClicked ? 
        <FontAwesomeIcon className='cursor-pointer p-1 text-4xl lg:hidden' icon={faTimes} onClick={ () => setIsClicked(isClicked => !isClicked) } />
        :
        <FontAwesomeIcon className='cursor-pointer p-2 text-4xl lg:hidden' icon={faBars} onClick={ () => setIsClicked(isClicked => !isClicked) } />
        }
      </div>
      {
          isClicked ?
          (
            <div className='w-full lg:hidden px-8 shadow flex-col justify-evenly items-start leading-8 lg:gap-10 flex'>
                <a className='w-full text-primary hover:text-secondary' href="#hero">Home</a>
                <a className='w-full text-primary hover:text-secondary' href="#tours">Travel &amp; tours</a>
                <a className='w-full text-primary hover:text-secondary' href="#investment">Promotion of Investment</a>
                <a className='w-full text-primary hover:text-secondary' href="#import">Import &amp; Export</a>
                <a className='w-full text-primary hover:text-secondary' href="#training">Training Program</a>
                <a className='w-full text-primary hover:text-secondary pb-3' href="#contact">Contact</a>
            </div>
          )
          :
          (
            <nav className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center py-3 px-8 shadow'>
                <img className='hidden lg:flex w-24' src={logoOphir} alt="Logo Ophir" />
                <div className='flex-col justify-evenly items-start lg:justify-between lg:items-center lg:flex-row leading-8 lg:gap-10 lg:flex'>
                    <a className='text-primary hover:text-secondary' href="#nav">Home</a>
                    <a className='text-primary hover:text-secondary' href="#tours">Travel &amp; tours</a>
                    <a className='text-primary hover:text-secondary' href="#investment">Promotion of Investment</a>
                    <a className='text-primary hover:text-secondary' href="#import">Import &amp; Export</a>
                    <a className='text-primary hover:text-secondary' href="#training">Training Program</a>
                    <a className='text-primary hover:text-secondary' href="#contact">Contact</a>
            </div>
                <div className='hidden lg:flex lg:gap-3 lg:items-center'>
                    <FontAwesomeIcon className='bg-accent p-2 rounded-full text-3xl' icon={faPhoneAlt} />
                    <span>+261 32 42 104 93</span>
                </div>
            </nav>
          )
      }
      </>
  );
};
