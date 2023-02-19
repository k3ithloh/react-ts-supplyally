import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white border-b-2 border-gray-200 py-4 md:px-4 '>
      <div className='max-w-full mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between'>
        <div className='flex place-items-start items-center'>
          <Link to='/'>
            <img
              className='h-16 sm:h-16'
              src={require("../../assets/logo/supplyally.png")}
              alt='Logo'
            />
          </Link>
          <div className='hidden md:flex md:ml-10'>
            <Link
              to='/track'
              className=' hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold track'
            >
              Track
            </Link>
            <Link
              to='/stats'
              className='hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold stat'
            >
              Statistics
            </Link>
          </div>
        </div>
        <div className='-mr-2 flex md:hidden'>
          <button
            onClick={toggleMenu}
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out'
          >
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              stroke='currentColor'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              stroke='currentColor'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className='px-2 pt-2 pb-3 sm:px-3'>
            <Link
              to='/'
              className='block text-gray-800 font-bold mt-1 py-2 px-3 rounded-md hover:bg-gray-100 hover:text-gray-900'
            >
              Track
            </Link>
            <Link
              to='/'
              className='block text-gray-800 font-bold mt-1 py-2 px-3 rounded-md hover:bg-gray-100 hover:text-gray-900'
            >
              Statistics
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
