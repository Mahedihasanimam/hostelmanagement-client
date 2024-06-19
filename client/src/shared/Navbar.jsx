import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { AuthContext } from "../provider/AuthProvider";

import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [navOpen, setNavOpen] = useState(false);

  const handlelogout = () => {
    logout();
  };
  const navigation = (
    <>
      <li className="text-lg   font-semibold ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-[#3B82F6] text-white mr-2" : " text-blue-400"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-[#3B82F6] text-white" : ""
          }
          to={"/Meals"}
        >
          Meals
        </NavLink>
      </li>
      <li className="text-lg font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-[#3B82F6] text-white" : ""
          }
          to={"/upcommingmeals"}
        >
          Upcoming Meals
        </NavLink>
      </li>
      {/* <li className="text-lg font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#3B82F6] text-white " : ""
          }
          to={"/bemembar"}
        >
          Be a Member
        </NavLink>
      </li> */}

      {/* {
        user && <li className="text-sm font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/myrecoment"}
        >
          My recommendations
        </NavLink>
      </li>
      }
      {
        user && <li className="text-sm  font-semibold">
        <NavLink to={'/myquery'}>MyQuery</NavLink>
      </li>
      } */}
    </>
  );
  const handletoggle = (e) => {
    e.preventDefault();
    setNavOpen(!navOpen);
  };
  return (
    <div className=" bg-black bg-opacity-75  text-white z-50 w-full fixed top-0   shadow-lg ">
      <div className="navbar flex container px-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={handletoggle}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              {navOpen ? <GiHamburgerMenu size={25}/> : <RxCross2 size={25}  />}
            </div>
            <ul
              tabIndex={0}
              className={`menu h-screen text-black w-screen -left-4 dropdown-content absolute   ${
                navOpen && "-translate-x-full "
              } transition-all ease-in-out duration-1000  mt-2  z-[999] p-2 shadow bg-base-100 rounded-sm  w-52`}
            >
              {navigation}
            </ul>
          </div>
          <Link to={"/"} className=" font-bold lg:text-2xl text-xl text-wrap">
            <img className="lg:w-1/2 md:w-1/2" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigation}</ul>
        </div>
        <div className="navbar-end  ">
          {/* notification  */}
          <span className="relative lg:mr-4 mr-0">
            <IoIosNotificationsOutline
              size={35}
              className="mr-4 cursor-pointer"
            />
            {/* <span className="absolute top-1 right-5 inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
            <span className="animate-ping absolute top-1 right-5 inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="absolute top-1 right-5 inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <div>
            {user && (
              <div className="dropdown text-black dropdown-end mr-4">
                <div tabIndex={0}>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                >
                  <p className="bg-[#3B82F6] rounded-md p-2 text-white font-bold">
                    <p>{user?.displayName || 'name not found'}</p>
                  </p>
                  <li>
                    <Link
                      className="hover:bg-[#3B82F6] hover:text-white p-2 font-bold"
                      to={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li
                    onClick={handlelogout}
                    className=" hover:bg-[#3B82F6] cursor-pointer  p-2 text-sm hover:text-white font-bold rounded-md lg:text-lg"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link className="" to={"/login"}>
            {!user && (
              <button className="btn bg-[#3B82F6] hover:bg-[#3B82F6] border-none lg:px-8 px-2 text-white font-bold rounded-md lg:text-lg text-xs">
                Join With Us
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
