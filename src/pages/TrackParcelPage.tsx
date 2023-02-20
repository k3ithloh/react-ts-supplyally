import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackParcelPage: React.FC = () => {
  const [trackingId, setTrackingId] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingId(event.target.value);
  };

  const handleFormSubmit = () => {
    navigate(`/track/${trackingId}`);
  };

  console.log("TrackParcelPage rendering");
  return (
    <div className='bg-gray-100 h-fit flex justify-center items-center'>
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
            onClick={handleFormSubmit}
          >
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackParcelPage;
