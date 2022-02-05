import React from 'react';
import export1 from '../../assets/images/coffee.jpg';

const Export = () => {
  return (
        <section className='px-10 mt-24'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                <img className='lg:w-1/2' src={export1} alt="Coffee" />
                <div className='lg:w-1/2'>
                    <h3 className='font-bold text-2xl mb-3 text-center lg:text-right'>Export</h3>
                    <p className='lg:w-full text-justify'>We mainly export agricultural products such as <b>coffee</b>, <b>vanilla</b>, <b>cloves</b>, <b>pepper</b>, <b>cocoa</b>, and some different kinds of <b>beans</b>. 
                        Our top quality packaging material protect the freshness, integrity and winning look of your products. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Export;
