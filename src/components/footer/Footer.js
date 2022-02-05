import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
      <footer className='p-10 bg-black text-white'>
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-evenly lg:items-start'>
          <div className='flex-1'>
              <h3 className='lg:text-xl font-bold mb-4'>About Us</h3>
              <p className='leading-7 text-justify'>Ophir International Services is a company specialized
              in tourism especially in organizing trip inside Madagascar and its amazing people, the "Malagasy".
              </p>
            </div>
            <div className='flex-1 flex lg:flex-row lg:justify-center'>
              <div>
                <h3 className='lg:text-xl font-bold mb-4'>Useful links</h3>
                <nav className='flex leading-7 flex-col justify-evenly items-start'>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#nav">Home</a>
                  </div>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#tours">Travel &amp; tours</a>
                  </div>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#investment">Promotion of Investment</a>
                  </div>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#import">Import &amp; Export</a>
                  </div>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#training">Training Program</a>
                  </div>
                  <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <a className=' hover:text-secondary' href="#contact">Contact</a>
                  </div>
                </nav>
              </div>
            </div>
            <div className='flex-1 leading-7 mb-16'>
              <h3 className='lg:text-xl font-bold mb-4'>Contact</h3>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>+261 32 42 104 93</span>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>contact@ophiris.com</span>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faFacebook} />
                <a href="https://www.facebook.com">Ophir International Services</a>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Lot IVA 36, Antaninandro, Antananarivo 101, Madagascar</span>
              </div>
            </div>
        </div>
        <p>&copy; Copyright {new Date(Date.now()).getFullYear()} - All rights reserved</p>
      </footer>
    );
};

export default Footer;