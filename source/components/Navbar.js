import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon } from '@fortawesome/fontawesome-free-solid';

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('hidden')) {
    menu.classList = ' ';
  } else {
    menu.classList = 'hidden';
  }
}

// function darkMode() {
//   const btn = document.getElementById('dark');
//   if (btn.classList.contains('dark')) {
//     btn.classList = '';
//   } else {
//     btn.classList = 'dark';
//   }
// }

const Navbar = () => {
  return (
    <nav className='fixed z-10 w-full bg-white shadow-lg dark:bg-gray-800'>
      <div className='z-20 mx-4 w-full px-7 text-xs'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex space-x-8'>
            <div className='md:mr-32'>
              {/* Website Logo --> show on all screens*/}
              <Link to='/' className='-ml-7 sm:-ml-0 flex items-center py-4 px-1'>
                <img
                  className='inline-block h-8 w-8 rounded-2xl'
                  src='/images/logo.png'
                  alt='Logo'
                />
                <span className='ml-1.5 text-base font-semibold text-indigo-700 dark:text-white'>
                  The Blockchain Unified Fund
                </span>
              </Link>
            </div>
            {/* Primary Navbar items --> show from md up */}
            <div className='hidden items-center space-x-8 text-indigo-600 dark:text-white md:flex'>
              <Link
                to='/'
                className='py-4 px-2 hover:text-black dark:hover:text-gray-400'
              >
                About
              </Link>
              <Link
                to='/experience'
                className='py-4 px-2 transition duration-300 hover:text-black dark:hover:text-gray-400'
              >
                Experience
              </Link>
              <Link
                to='/work-with-us'
                className='py-4 px-2 transition duration-300 hover:text-black dark:hover:text-gray-400'
              >
                Work with us
              </Link>
              <Link
                to='/contact'
                className='py-4 px-2 transition duration-300 hover:text-black dark:hover:text-gray-400'
              >
                Quick call
              </Link>
              <Link
                to='/contact'
                className='py-4 px-2 transition duration-300 hover:text-black dark:hover:text-gray-400'
              >
                Socials
              </Link>
            </div>
          </div>

          {/* Secondary Navbar items --> show from md up */}
          <div className='hidden items-center space-x-3 md:flex md:ml-64'>
            <Link
              to='/log-in'
              className='rounded bg-indigo-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600 dark:text-white'
            >
              Log In
            </Link>
            <Link
              to='/register'
              className='rounded bg-indigo-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600'
            >
              Sign Up
            </Link>
          </div>
         {/* <div>
             <FontAwesomeIcon
              className='mt-6 ml-20 -mr-20 cursor-pointer text-xl text-yellow-400 dark:text-white sm:ml-72 md:ml-0'
              onClick={darkMode}
              icon={faMoon}
            /> 
          </div>*/}

          {/* Mobile menu button icon --> only shows in sm */}
          <div className='flex items-center md:hidden'>
            <button className='outline-none' onClick={toggleMenu}>
              <svg
                className='h-6 w-6 dark:text-indigo-500'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='hidden' id='menu'>
        <ul
          className='m-1 bg-gray-200 py-3 px-2 text-lg dark:bg-gray-500 dark:text-white'
          onClick={toggleMenu}
        >
          <li className=''>
            <Link
              to='/'
              className='block px-2 py-4 hover:bg-indigo-400 dark:hover:bg-indigo-300 dark:hover:text-black'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='block px-2 py-4 transition duration-300 hover:bg-indigo-400 dark:hover:bg-indigo-300 dark:hover:text-black'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='block px-2 py-4 transition duration-300 hover:bg-indigo-400 dark:hover:bg-indigo-300 dark:hover:text-black'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='block px-2 py-4 transition duration-300 hover:bg-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-black'
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/log-in'
              className='mt-1 inline-block rounded bg-indigo-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600 dark:text-white'
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to='/register'
              className='my-2 inline-block rounded bg-indigo-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600'
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
