import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col items-start justify-center w-full footer-bg divide-y'>
      <div className='text-white footer-header font-semibold pt-12 px-6 pb-6 sm:px-12 pb-12'>
        Supply Ally
      </div>
      <div className='flex items-center justify-center pt-4 mb-4 w-full'>
        {/* <div className='h-px bg-white flex-grow mr-4'></div> */}
        <div className='pt-6 px-6 pb-16 sm:pl-12 grid grid-cols-12'>
          <div className='footer-text font-normal text-sm mt-2 col-span-12 md:col-span-2'>
            Version 1.0.0
          </div>
          <div className='footer-text font-normal text-sm mt-2 col-span-12 md:col-span-3'>
            Last updated 20 Dec 2021
          </div>
          <div className='footer-text font-normal text-sm mt-2 col-span-12 md:col-span-3'>
            ©2022 Government of Singapore.
          </div>
        </div>

        <div className='h-px bg-gray-600 flex-grow ml-4'></div>
      </div>
    </footer>
  );
};

export default Footer;
