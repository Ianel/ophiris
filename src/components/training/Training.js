import React from 'react';
import leadership from '../../assets/images/leadership.jpg';
import french from '../../assets/images/french.jpg';
import tourism from '../../assets/images/tourism.jpg';
import communication from '../../assets/images/communication.jpg';
import marketing from '../../assets/images/marketing.jpeg';
import management from '../../assets/images/management.jpg';

const Training = () => {
  return (
        <section id="training" className='px-10 my-24'>
            <h3 className='lg:text-3xl font-bold lg:mb-6 text-center lg:mt-24 text-2xl'>We offer training</h3>
           <div className='mt-12 grid lg:grid-cols-3 gap-8 lg:ml-4 md:grid-cols-2'>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={leadership} alt="" />
                        <h4 className='lg:text-lg font-semibold'>Leadership</h4>
                    </div>
                    <p>Leadership is at the basis of modern soft skills</p>
                </div>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={marketing} alt="" />
                        <h4 className='lg:text-lg font-semibold'>Marketing</h4>
                    </div>
                    <p>Marketing is vital for companies to survive and to grow.</p>
                </div>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={management} alt="" />
                        <h4 className='lg:text-lg font-semibold'>Management</h4>
                    </div>
                    <p>Managing is nowadays the number skills researched by the companies.</p>
                </div>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={communication} alt="" />
                        <h4 className='lg:text-lg font-semibold'>Communication</h4>
                    </div>
                    <p>Communication makes the world a much better place to live in.</p>
                </div>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={tourism} alt="" />
                        <h4 className='lg:text-lg font-semibold'>Tourism</h4>
                    </div>
                    <p>Madagascar is among the most beautiful countries for tourism</p>
                </div>
                <div className='mx-auto shadow-md lg:p-8 p-4 w-72 lg:w-96 gap-2 flex flex-col justify-evenly items-start'>
                    <div className='w-full flex justify-start items-center gap-5'>
                        <img className='w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full' src={french} alt="" />
                        <h4 className='lg:text-lg font-semibold'>French</h4>
                    </div>
                    <p>French is one of the 7 international languages approved by UN</p>
                </div>
           </div>
        </section>
    );
};

export default Training;
