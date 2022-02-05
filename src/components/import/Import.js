import React from 'react';
import importImage from '../../assets/images/bgimport.jpg';

const Import = () => {
  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:items-start lg:mt-24 mt-16 px-10'>
        <div className='lg:w-1/2 mb-8'>
            <h3 className='font-bold text-2xl mb-3 text-center lg:text-left'>Import</h3>
            <div> 
                <span>We import and sell:</span>
                <ul>
                    <li className='list-disc list-inside'>General merchandise (Rice, flour, cooking oil, …);</li>
                    <li className='list-disc list-inside'>Electronic devices and auto parts.</li>
                </ul>
            </div>
        </div>
        <img className='lg:w-1/2 rounded-md' src={importImage} alt="" />
    </div>
    );
};

export default Import;
