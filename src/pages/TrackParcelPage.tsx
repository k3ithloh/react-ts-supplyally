import React, { useState } from "react";

const TrackParcelPage: React.FC = () => {
  const [trackingId, setTrackingId] = useState<string>("");
  const [parcelStatus, setParcelStatus] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingId(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Fetch parcel details using trackingId
    // Update parcelStatus state with fetched data
    setParcelStatus(`Delivery status of parcel ${trackingId}`);
  };
  console.log("Page still runs on routing");
  return (
    <div className='bg-gray-100 h-fit flex justify-center items-center'>
      {parcelStatus === "" ? (
        <div className='bg-white p-10 rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold mb-6 align-center track-text'>
            Track Parcel
          </h1>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-base font-bold mb-4 track-text'>
              Key in individual package number to track
            </h2>
            <div className='mb-4'>
              <label
                htmlFor='trackingId'
                className='block track-text font-bold mb-2'
              >
                Tracking ID
              </label>
              <input
                type='text'
                id='trackingId'
                className='w-full border border-gray-400 p-2 rounded-md'
                value={trackingId}
                onChange={handleInputChange}
              />
            </div>
            <button
              type='submit'
              className='page-button w-full text-white font-bold py-2 px-4 rounded-md'
            >
              Check
            </button>
          </form>
        </div>
      ) : (
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
                <span className='text-xs font-normal pb-0 mt-3'>
                  Tracking ID
                </span>
                <span className='text-lg font-bold'>{trackingId}</span>
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
                <div className='col-span-7'>
                  Parcel left the carrier facility
                </div>
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
            <button
              type='submit'
              className='page-button-white button-alt font-bold rounded-md pt-2 pb-2 col-span-12 md:col-span-2 border-[#305367] mb-3'
            >
              Back
            </button>
            <div className='col-span-0 md:col-span-8'></div>
            <button
              type='submit'
              className='page-button text-white font-bold rounded-md pt-2 pb-2 col-span-12 md:col-span-2 mb-3 order-first md:order-last'
            >
              Submit
            </button>
          </div>
        </div>
        // 343 px mobile
        // 103px normal
        // Original Code
        // <div className='bg-white p-8 rounded-lg shadow-lg'>
        //   <h1 className='text-2xl font-bold mb-4 text-white track-card-header'>
        //     {parcelStatus}
        //   </h1>
        //   <p>Details of parcel delivery</p>
        // </div>
      )}
    </div>
  );
};

export default TrackParcelPage;
