import React, { useEffect, useState } from 'react';
import Login from '../components/Login';

function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Courses',
      link: '/courses',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];


  /**Sticky Navbar */
    const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
      }, []);
   
  /**Dark Theme */



  /**Active Link */
  const [activeLink, setActiveLink] = useState('/');
  const handleItemClick = (link) => {


  };

  return (
    <>
       <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4  fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="flex justify-between items-center py-4 mx-8">
          <div className="flex items-center">
            <div className="dropdown">
              <button
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul className={`menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow rounded-box w-52 ${sticky ? "bg-slate-50 text-slate-900" : "bg-slate-50 text-slate-900"}`}>
                {navItems.map((item) => (
                  <li className='duration-300 transition-all ease-in-out' key={item.name}>
                    <a
                      href={item.link}
                      className={activeLink === item.link ? 'text-orange-500' : ''}
                      onClick={() => handleItemClick(item.link)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="/" className="text-2xl font-bold cursor-pointer ml-2 lg:ml-0">
              Book Store
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className={activeLink === item.link ? 'text-orange-500' : ''}
                      onClick={() => handleItemClick(item.link)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              
              <label className="flex items-center gap-2 bg-white border border-slate-400 border-spacing-2 px-4 py-2 rounded-md">
                
                <input type="text" className="text-black bg-transparent outline-none" placeholder="Search" />
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

              </label>
              
              
              
            
            </div>

            

            <div>
              <a  className="btn px-6 py-1 rounded-full ml-4 lg:ml-0 bg-slate-50 text-black hover:text-white"
              onClick={()=>document.getElementById("my_modal_3").showModal()}>
              Login
               
              </a>
                 <Login/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
