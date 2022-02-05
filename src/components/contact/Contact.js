import React from 'react';
import formImage from '../../assets/images/communication.jpg';
import logoOphir from '../../assets/images/logo-PNG.png';

const Contact = () => {
  return (
      <div id="contact" className='mx-10 my-24'>
          <h3 className='lg:text-3xl font-bold lg:mb-6 text-center lg:mt-24 text-2xl mb-10'>Contact Us</h3>
         <div className='flex flex-col lg:flex-row lg:justify-evenly lg:items-center'>
            <img className='lg:w-1/2 object-cover' src={formImage} alt="" />
            <form className='lg:mt-8 lg:w-1/3 shadow-lg p-6 lg:p-10'>
                <img className='w-24 mx-auto my-5' src={logoOphir} alt="" />
                <div className='flex flex-col my-4'>
                    <label for="nom">Name</label>
                    <input className='mt-4 outline-none ring-2 p-2 rounded-md ring-primary' type="text" id="nom" placeholder='Please, fill with your name' />
                </div>
                <div className='flex flex-col my-4'>
                    <label for="email">Email</label>
                    <input className='mt-4 outline-none ring-2 p-2 rounded-md ring-primary' type="email" id="email" placeholder='Please, fill with your email' />
                </div>
                <div className='flex flex-col my-4'>
                    <label for="nationality">Nationality</label>
                    <input className='mt-4 outline-none ring-2 p-2 rounded-md ring-primary' type="text" id="nationality" placeholder='Please, fill with your nationality' />
                </div>
                <div className='flex flex-col my-4'>
                    <label for="message">Message</label>
                    <textarea className='mt-4 outline-none ring-2 p-2 rounded-md ring-primary' id="message" placeholder='Please, enter your message'></textarea>
                </div>
                <input className='bg-primary text-white w-full text-center mb-8 p-2 rounded-md' type="submit" value="Send your message" />
            </form>
        </div>
      </div>
    );
};

export default Contact;
