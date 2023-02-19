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

        <div className='flex justify-center'>
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
              <div className='grid grid-cols-2 grid-flow-dense gap-0'>
                <div className='w-2/5'>2.22 PM</div>
                <div>
                  Package in transit. Flight containing package has departed.
                </div>
              </div>
            </div>

            <div className='p-6 w-fit sm:w-2/5'>
              <h5 className='text-black font-bold text-base mb-2'>
                Sunday, 12 Feb
              </h5>
              <div className='grid grid-cols-2 grid-flow-dense gap-0'>
                <div className='w-2/5'>5.09 PM</div>
                <div>Parcel left the carrier facility</div>
              </div>
            </div>

            <div className='p-6 w-fit sm:w-2/5'>
              <h5 className='text-black font-bold text-base mb-2'>
                Friday, 10 Feb
              </h5>
              <div className='grid grid-cols-2 grid-flow-dense gap-0'>
                <div className='w-2/5'>8.41 AM</div>
                <div>Parcel arrived at a carrier facility</div>
              </div>
            </div>
          </div>
        </div>
        // <div className='parcel-card'>
        //   <div className='card-need-help'>
        //     <div className='cards-templates-form'>
        //       <div className='header-list'>
        //         <div className='cards00_-header-bardark'>
        //           <div className='atom-cards-header-bar'>
        //             <div className='body-1'>
        //               <div className='profile'>
        //                 <img
        //                   src={require("../assets/Cards/parcel.png")}
        //                   alt='parcel'
        //                 />
        //                 <div className='identification-number-label-nric'>
        //                   <div className='tracking-id'>Tracking Id</div>
        //                   <div className='x1234567000-t'>{trackingId}</div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className='lists'></div>
        //     </div>
        //   </div>
        // </div>

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
