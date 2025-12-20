import React from 'react';
import logo from '../assets/logo.png';
import EasyButton from '../components/BtnCompo';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-[#29313D] w-full'>
        <img 
          src={logo} 
          alt="logo" 
          className=' w-40 h-15 ml-5 mt-3  object-contain'
        />

        {/* buttons */}
        <div className="flex ml-6 items-center space-x-20">

          <EasyButton label={"CAMPAIGNS"} variant='noutline'/>
          <EasyButton label={"CLIMATE"} variant='noutline'/>
          <EasyButton label={"BLOG"} variant='noutline'/>

        </div>

        {/* login button */}
        <EasyButton label={"SIGN IN"} className=''/>

    </nav>
  )
}

export default Navbar






