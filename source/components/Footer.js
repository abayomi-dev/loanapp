import {
    FaWhatsapp,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaArrowUp,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-400 dark:bg-gray-900 dark:text-gray-400 md:mx-0'>
        <div className='p-4'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-4 '>
            <div>
              <h5 className='mt-4 text-lg font-semibold dark:text-gray-200'>
                Company
              </h5>
              <p>
                <Link to='/'>About</Link>
              </p>
              <p>
                <Link to='/'>Awards</Link>
              </p>
              <p>
                <Link to='/'>Contact us</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Exerience
              </h5>
              <p>
                <Link to='/'>Academy</Link>
              </p>
              <p>
                <Link to='/'>Safety</Link>
              </p>
              <p>
                <Link to='/'>FAQs</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Terms
              </h5>
              <p>
                <Link to='/'>Privacy Policy</Link>
              </p>
              <p>
                <Link to='/'>Terms & Condition</Link>
              </p>
            </div>
            <div>
              <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                Connect
              </h5>
              <div className='flex gap-1.5 mt-2'>
                <a href='https://www.instagram.com/'>
                    <FaFacebook size={24} className='text-blue-300' />
                </a>
                <a href='https://www.instagram.com/'>
                    <FaInstagram size={24} className='text-red-300' />
                </a>
                <a href='https://www.instagram.com/'>
                    <FaWhatsapp size={24} className='text-green-300' />
                </a>
                <a href='https://www.instagram.com/'>
                    <FaTwitter size={24} className='text-blue-500' />
                </a>
              </div>
              <p className='mt-4'>Download Our App</p>
              <div className=''>
                <Link to='/'>
                  <img
                    src='/assets/playstore.png'
                    alt='Google playstore'
                    className='inline h-8 w-16 md:w-20'
                  />
                </Link>
                <Link to='/'>
                  <img
                    src='/assets/appstore.png'
                    alt='Appstore'
                    className='md:w-26 inline h-11 w-24'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className='p-3 text-center'>
          Copyright &copy; {new Date().getFullYear()}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
