import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleLoginClick = () => {
    // handle login logic here
  };

  return (
    <div className='flex items-center justify-center h-fit bg-gray-100'>
      <div className='p-10 bg-white rounded shadow-md'>
        <h1 className='text-2xl font-bold mb-6 align-center text-center'>
          Login
        </h1>
        <input
          type='text'
          placeholder='Enter user name'
          className='w-full px-4 py-2 border border-gray-300 rounded mb-4'
          value={username}
          onChange={handleUsernameChange}
        />
        <button
          type='button'
          className='page-button text-white font-bold py-3 px-4 w-full rounded'
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
