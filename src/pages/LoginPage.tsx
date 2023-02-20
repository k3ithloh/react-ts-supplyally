import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleLoginClick = () => {
    const user = { username: username };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
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

        <Link to='/track'>
          <button
            type='button'
            className='page-button text-white font-bold py-3 px-4 w-full rounded'
            onClick={handleLoginClick}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
