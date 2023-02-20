// import { Divider } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import { UserContext } from "../../userContext";

const NavigationBar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  const logOutUser = () => {
    // const user = { username: username };
    const user = null;
    window.location.reload();
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <nav className='bg-white border-b-2 border-gray-200 py-4 md:px-4 '>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center'>
          <img src={require("../../assets/logo/supplyally.png")} alt='Logo' />
        </div>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
          {/* NavBar area */}
          <ul className='flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
            <li>
              <Link
                to='/track'
                className=' py-2 pl-3 pr-4 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold track'
              >
                Track
              </Link>
            </li>
            <li className='pr-15'>
              <Link
                to='/stats'
                className=' py-2 pl-3 pr-4 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold stat'
              >
                Statistics
              </Link>
            </li>
            <li>
              {user ? (
                <div className='py-2 pl-3 pr-4 text-gray-700 rounded px-3 py-2 rounded-md text-base font-normal'>
                  👋🏻 Hi <span className='font-bold'> {user.username} </span>
                </div>
              ) : (
                <div></div>
              )}
            </li>
            <li>
              {user ? (
                <div className='flex'>
                  <div className='py-2 pl-3 pr-4 text-gray-700 px-3 py-2'>
                    |
                  </div>
                  <button className='text-base font-bold' onClick={logOutUser}>
                    Logout
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
