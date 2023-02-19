// import React, {useState}from "react";
// export const Login = () => {
//   return (
//     <div className='main-body-section'>
//       <div className='container'>
//         <div className='block-title'>
//           <h2>Testing Login Page</h2>
//         </div>
//         <div className='about-content'>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
//             cupiditate omnis eius totam aperiam? Illo eius repudiandae nostrum
//             iste dignissimos ad molestias facere atque, itaque placeat dolores
//             dolorum doloremque? Sint.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
//             impedit sapiente tempore veritatis neque minima laudantium eius
//             magni aut aliquid esse sequi, hic delectus nihil temporibus quas
//             nobis porro exercitationem? Repellendus ipsa animi enim id sint
//             ullam beatae eius repudiandae consequuntur nisi, eum quia, ad iure
//             similique, tenetur cum voluptatibus sit natus rem eos iusto quam
//             eveniet et quidem. Est distinctio minima sequi quas provident hic
//             nulla maiores quam quaerat. Corrupti unde illum suscipit autem iure
//             maxime dolorem magni ipsam! Ad officia veritatis aperiam nemo.
//             Voluptas at nostrum molestias incidunt necessitatibus, sapiente
//             numquam facere explicabo quos, eum cumque repellat quo.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
//             sunt ullam nesciunt beatae deleniti similique aliquam excepturi,
//             minus nobis minima ex atque, quos veniam architecto doloribus maxime
//             sapiente. Vel voluptatem pariatur delectus dolor quidem eveniet
//             repellat facere tempora nisi. Ut!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";

const TrackParcel: React.FC = () => {
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
    <div className='bg-gray-300 h-screen flex justify-center items-center'>
      {parcelStatus === "" ? (
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold mb-4'>Track Parcel</h1>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-lg font-semibold mb-2'>Tracking ID</h2>
            <input
              type='text'
              className='w-full border border-gray-300 p-2 rounded-lg mb-4'
              value={trackingId}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded-lg'
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold mb-4'>{parcelStatus}</h1>
          <p>Details of parcel delivery</p>
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
