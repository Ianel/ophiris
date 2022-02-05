import React from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBus, faHome, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TourInfo = (props) => {
  return (
    <div className='flex gap-6 lg:flex-row flex-col lg:justify-between lg:items-center mt-16 px-10'>
        <div className='lg:w-1/2'>
            <h3 className='font-bold text-2xl mb-3 text-center lg:text-left'>{props.tourTitle} Tour</h3>
            <p className='leading-8 text-justify'>{props.tourDescription}</p>
        </div>
        <div className='lg:w-1/2 flex flex-col justify-center items-center'>
            <img className='lg:w-96 w-full' src={props.tourImage} alt="" />
            <div className='lg:w-96 w-full p-4 lg:leading-9 bg-slate-200'>
                <h4 className='font-semibold text-lg'>{props.tourTitle} Tour</h4>
                <div className='flex justify-between items-center'>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className='ml-2'>{props.tourDuration}</span>
                    </div>
                    <span>${props.tourPrice}/person</span>
                </div>
                <div className='mt-3 gap-4 flex justify-center items-center'>
                    <FontAwesomeIcon className='bg-accent p-2 text-3xl rounded-full' icon={faPlane} />
                    <FontAwesomeIcon className='bg-accent p-2 text-3xl rounded-full' icon={faBus} />
                    <FontAwesomeIcon className='bg-accent p-2 text-3xl rounded-full' icon={faHome} />
                </div>
            </div>
        </div>
    </div>
    );
};

export default TourInfo;
