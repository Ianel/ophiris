import React from 'react';
import promo1 from '../../assets/images/tourism2.jpg';
import promo2 from '../../assets/images/agribusiness.jpg';
import promo3 from '../../assets/images/mining.png';
import promo4 from '../../assets/images/light-industry.jpg';
import promo5 from '../../assets/images/ict.jpg';
import promo6 from '../../assets/images/infrastructure.png';

const Investment = () => {
  return (
        <section id="investment" className='mx-10 my-24'>
            <h2 className='lg:text-3xl font-bold lg:mb-16 text-center lg:mt-24 text-2xl mb-10'>We promote investment</h2>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div className='lg:w-5/12 lg:pr-10 mb-10'>
                    <h3 className='font-semibold lg:text-2xl lg:mb-5 mb-3 text-xl'>Who we are ?</h3>
                    <p className=' text-justify '>We are a professional and multidisciplinary team, determined to accompany
                        you from the planning of your project, during your implementation, and even during
                        the expansion of your activities, to deliver the best practical outcomes through an environment
                        of honesty, transparency, confidentiality and moral standards.
                        We strive to exceed expectations by maintaining the highest level of quality services.
                    </p>
                </div>
                <div className='md:grid md:grid-cols-3 lg:w-7/12 flex flex-col justify-evenly items-center gap-5 lg:grid lg:grid-cols-3 lg:gap-8'>
                    <div className='w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo1} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>Tourism</p>
                    </div>
                    <div className='w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo2} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>Agribusiness</p>
                    </div>
                    <div className='w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo3} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>Mining</p>
                    </div>
                    <div className='w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo4} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>Light industry</p>
                    </div>
                    <div className='w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo5} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>ICT</p>
                    </div>
                    <div className=' w-56 h-56 shadow-md rounded-sm relative'>
                        <img className='h-32 w-full object-cover' src={promo6} alt="" />
                        <p className='absolute left-1/2 -translate-x-1/2 bottom-6'>Infrastructures</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investment;
