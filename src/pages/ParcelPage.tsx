import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "../userContext";
import { useParams } from "react-router-dom";

const ParcelPage: React.FC = () => {
  // const { user } = useContext(UserContext)
  const { id } = useParams<{ id: string }>();
  console.log("Parcel Info Page");
  return (
    // Once Tracking ID is submitted, the following will be displayed

    <div className='flex justify-center flex-col'>
      <div className='rounded-lg shadow-lg bg-white max-w place-content-center items-center pb-2'>
        <div className='flex track-card-header rounded-t-lg pb-2 pt-2 '>
          <img
            className='w-fit h-fit items-center place-content-center mt-3 ml-6'
            src={require("../assets/Cards/parcel.png")}
            alt='parcel'
          />
          <div className='grid grid-rows-2 text-white pl-3 gap-0'>
            <span className='text-xs font-normal pb-0 mt-3'>Tracking ID</span>
            <span className='text-lg font-bold'>{id}</span>
          </div>
        </div>

        <div className='p-6 w-fit sm:w-2/5'>
          <h5 className='text-black font-bold text-base mb-2'>
            Monday, 13 Feb
          </h5>
          <div className='grid grid-cols-12'>
            <div className='col-span-4'>2.22 PM</div>
            <div className='col-span-7'>
              Package in transit. Flight containing package has departed.
            </div>
          </div>
        </div>

        <div className='p-6 w-fit sm:w-2/5'>
          <h5 className='text-black font-bold text-base mb-2'>
            Sunday, 12 Feb
          </h5>
          <div className='grid grid-cols-12'>
            <div className='col-span-4'>5.09 PM</div>
            <div className='col-span-7'>Parcel left the carrier facility</div>
          </div>
        </div>

        <div className='p-6 w-fit sm:w-2/5'>
          <h5 className='text-black font-bold text-base mb-2'>
            Friday, 10 Feb
          </h5>
          <div className='grid grid-cols-12'>
            <div className='col-span-4'>8.41 AM</div>
            <div className='col-span-7'>
              Parcel arrived at a carrier facility
            </div>
          </div>
        </div>
      </div>

      <div>
        <input
          type='checkbox'
          className='appearance-none checked:bg-blue-500 ...'
        />
      </div>

      <div className='flex items-center mb-4'>
        <input
          id='default-checkbox'
          type='checkbox'
          value=''
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          htmlFor='default-checkbox'
          className='ml-2 text-sm font-medium text-black'
        >
          Marked as tracked.
        </label>
      </div>

      <div className='grid grid-cols-12'>
        <Link
          to='/track'
          className='t-2 pt-2 pb-2 col-span-12 md:col-span-2 mb-3 page-button-white button-alt rounded-md p flex justify-center'
        >
          <button
            type='submit'
            className=' button-alt font-bold border-[#305367] '
          >
            Back
          </button>
        </Link>

        <div className='col-span-0 md:col-span-8'></div>
        <Link
          to='/track'
          className='t-2 pt-2 pb-2 col-span-12 md:col-span-2 mb-3 page-button button-alt rounded-md p flex justify-center order-first md:order-last'
        >
          <button type='submit' className='text-white font-bold '>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ParcelPage;
