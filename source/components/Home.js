import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  import { Swiper, SwiperSlide } from "swiper/react";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <>
      <div className='grid bg-gray-100 pt-16 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <div className='max-w-xl'>
            <h1 className='my-2 text-2xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-3xl xl:text-4xl'>
              Need a Loan?
              <br />
              <span className='block mt-2 text-indigo-300 dark:text-indigo-600'>
                You can get it with your digital assests.
              </span>
            </h1>
            <p className='mt-2 text-gray-600 dark:text-white sm:text-xl'>
              We are one of the frontier in the blockchain industry. A blockchain startup to save, transfer and loan funds to anyone, anywhere. 
            </p>
            <img
              src='/images/hero.png'
              alt='Hero-image'
              className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
            />
            <div className='mt-4 space-x-1 sm:mt-6'>
              <Link  to="/register"
                className='focus:outline-none inline-block transform rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-indigo-600 dark:bg-indigo-600  sm:text-base '
              >
                Get Started
              </Link>
              <a
                href='/'
                className='focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base'
              >
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className='relative m-3 hidden lg:block 2xl:col-span-3'>
          <img
            src='/images/hero.png'
            alt='Hero-image'
            className='mt-10 absolute inset-0 h-[30rem] w-[40rem] rounded object-cover object-center'
          />
        </div>
      </div>

      <div className='py-2 md:py-10 bg-gray-100 md:pt-16 dark:bg-gray-700'>
        <h2 className='font-bold text-center text-5xl text-blue-400 pt-16'>
          Our core services         
        </h2>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative w-[23.5rem] sm:w-[29rem] md:w-[78rem] m-5 h-[25.5rem] md:h-[20rem]"
        >
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 rounded-full mx-auto" src="./images/save.jpg" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Save</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                    Use the blockchain unified fund to keep fund on the blockchain. Access anywhere and anytime.
                  </p>
              </figure>
          </SwiperSlide>
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 rounded-full mx-auto" src="./images/transfer.jpg" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Transfer</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                  Use the blockchain unified fund to transfer fund on the blockchain. Share with people and accounts anywhere in the universe and at anytime.
                  </p>
              </figure>
          </SwiperSlide>
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 rounded-full mx-auto" src="./images/loan.png" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Loan</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                    Get quick loans without colateral in simple steps.
                  </p>
              </figure>
          </SwiperSlide>
        </Swiper>
      </div>
  
      <div className='grid bg-gray-100 pt-10 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='relative ml-10 hidden lg:block'>
            <img
                src='/images/social.png'
                alt='Hero-image'
                className='absolute inset-0 h-full w-full rounded object-cover object-center'
            />
        </div>

        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <h1 className='mt-2 text-xl font-bold text-gray-900 dark:text-white sm:mt-2 sm:text-4xl lg:mt-4 lg:text-2xl xl:text-3xl'>No collateral, just social proofs</h1>
          <p className='mt-8 text-gray-600 dark:text-white sm:text-xl'>
            You don't need multiple paperworks to get a loan, just show proof of your social credibility and process loan in minutes.
          </p>
          <img
            src='/images/social.png'
            alt='Hero-image'
            className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
          />
        </div>
      </div>

      <div className='grid bg-gray-100 py-10 dark:bg-gray-700 md:grid-cols-2 w-full'>
        <div className='relative mx-auto px-2 py-4'>
          <h1 className='mt-2 text-xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-5xl'>
            Social proofs are cool
          </h1>
          <p className='mt-8 text-gray-600 dark:text-white sm:text-xl'>
            It could be social media pressence or followers, use how rated you are on social media to access loans quickly.
          </p>
        </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative w-[23.5rem] sm:w-[29rem] md:w-[78rem] h-[25.5rem] md:h-[20rem]"
        >
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 h-32 rounded-full mx-auto" src="./images/social-proof.png" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Social proof</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                    Connect your social media accounts, verify and up your status to get quick loans without colleteral.
                  </p>
              </figure>
          </SwiperSlide>
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 h-32 rounded-full mx-auto" src="./images/digital-asset.jpg" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Digital Asset</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                    Use your soft assets online to process transction on the blockchain unified fund.
                  </p>
              </figure>
          </SwiperSlide>
          <SwiperSlide className="md:mt-1">
              <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700 h-[25rem] text-center">
                  <img className="w-32 rounded-full mx-auto" src="../images/proof.jpg" alt="" />
                  <h3 className='text-2xl font-semibold mt-0 md:-mt-10'>Documents</h3>                   
                  <p className="text-lg font-semibold text-gray-300 mx-4 mt-0 md:-mt-10 dark:text-gray-900">
                  Use your legal documents to fast-track loans, setup within minutes.
                  </p>
              </figure>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='-pb-4 md:py-10 text-center bg-gray-100 md:pt-16 dark:bg-gray-700'>
        <h2 className='font-bold text-5xl text-blue-400 pt-4'>
          Pay later services         
        </h2>
        <p className='mt-3 text-2xl text-gray-600 dark:text-white sm:text-xl'>
          Access our pay later services
        </p>
      </div>
      <div className='grid bg-gray-100 pt-10 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='relative ml-10 hidden lg:block'>
            <img
                src='/images/social.png'
                alt='Hero-image'
                className='absolute inset-0 h-full w-full rounded object-cover object-center'
            />
        </div>

        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:mt-4 lg:text-2xl xl:text-3xl'>
            Learn and pay later
          </h1>
          <p className='mt-3 text-gray-600 dark:text-white sm:text-xl'>
            Get access to our premium lectures, training and mentorships and pay later.
          </p>
          <img
            src='/images/social.png'
            alt='Hero-image'
            className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
          />
          <p className='mt-4 underline underline-offset-4 text-gray-600 dark:text-white sm:text-xl'>
            Get started
          </p>
        </div>

        <div className='relative ml-10 hidden lg:block'>
            <img
                src='/images/social.png'
                alt='Hero-image'
                className='absolute inset-0 h-full w-full rounded object-cover object-center'
            />
        </div>
        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:mt-4 lg:text-2xl xl:text-3xl'>
            Build and pay later
          </h1>
          <p className='mt-3 text-gray-600 dark:text-white sm:text-xl'>
           Build blockchain apps in simple steps, ship and share with others.
          </p>
          <img
            src='/images/social.png'
            alt='Hero-image'
            className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
          />
          <p className='mt-4 underline underline-offset-4 text-gray-600 dark:text-white sm:text-xl'>
            Get started
          </p>
        </div>

        <div className='relative ml-10 hidden lg:block'>
            <img
                src='/images/social.png'
                alt='Hero-image'
                className='absolute inset-0 h-full w-full rounded object-cover object-center'
            />
        </div>
        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:mt-4 lg:text-2xl xl:text-3xl'>
            Service and pay later
          </h1>
          <p className='mt-3 text-gray-600 dark:text-white sm:text-xl'>
            Get access to our services and pay later.
          </p>
          <img
            src='/images/social.png'
            alt='Hero-image'
            className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden'
          />
          <p className='mt-4 underline underline-offset-4 text-gray-600 dark:text-white sm:text-xl'>
            Get started
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;