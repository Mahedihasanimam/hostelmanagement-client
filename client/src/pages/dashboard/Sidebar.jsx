import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import logo from "../../assets/logo.png";

import { IoMdMenu, IoMdSettings } from "react-icons/io";

import UserMenu from "./userMenu/UserMenu";
import AdminMenu from "./AdminMenu/AdminMenu";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import { FaHome } from "react-icons/fa";
import UseAdmin from "../../hooks/UseAdmin";
import { ImSpinner9 } from "react-icons/im";
const Sidebar = () => {
  const { logout } = UseAuth();
  // const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(true);
  const [isAdmin,isLoading] = UseAdmin();
 
console.log(isAdmin);

  if(isLoading){
    return <ImSpinner9
    size={40}
    className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
  />
  }


  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="flex gap-6 ">
      {/* Small Screen Navbar */}
      <div className=" flex  w-full mx-auto justify-between md:hidden  z-50 ">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/dashboard">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? <GiHamburgerMenu size={25} /> : <RxCross2 size={25} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-50  fixed  h-screen flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          {isAdmin? <AdminMenu /> :<UserMenu />}
        </div>

        <div>
          <hr />

          <Link to={'/'}>
          <button className="flex w-full items-center px-4 py-2 mt-5  bg-[#60A5FA] text-white transition-colors duration-300 transform">
            <FaHome className="w-5 h-5"/>
            <span className="mx-4">Home</span>
          </button>
          </Link>

          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 mt-5  bg-[#60A5FA] text-white transition-colors duration-300 transform"
          >
            <IoMdSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
