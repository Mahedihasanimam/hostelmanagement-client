import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/Minimal and Elegant Real Estate Logo Template.png";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handlelogout = () => {
    logout();
  };
  const navigation = (
    <>
      <li className="text-sm text-[#3B82F6]  font-semibold ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active bg-blue-400 text-[#3B82F6] " : " text-blue-400"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-[#3B82F6] bg-base-100" : ""
          }
          to={"/Meals"}
        >
          Meals
        </NavLink>
      </li>
      <li className="text-sm font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-[#3B82F6] bg-base-100" : ""
          }
          to={"/bemembar"}
        >
          Be a Member
        </NavLink>
      </li>
      <li className="text-sm font-semibold mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-[#3B82F6] bg-base-100" : ""
          }
          to={"/allbemembar"}
        >
          All Member
        </NavLink>
      </li>

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
  return (
    <div className=" bg-white z-50 w-full fixed top-0   shadow-md ">
      <div className="navbar flex container px-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigation}
            </ul>
          </div>
          <Link to={"/"} className=" font-bold lg:text-2xl text-xl text-wrap">
            <img className="h-11" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigation}</ul>
        </div>
        <div className="navbar-end  ">
          {/* notification  */}
            <span className="relative mr-4">
            <IoIosNotificationsOutline
            size={35}
            className="mr-4 cursor-pointer"
          />
          <span className="absolute -top-2 right-2">+1</span>
            </span>
          <div>
            {user && (
              <div className="dropdown dropdown-end mr-4">
                <div tabIndex={0}>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="hover:bg-[#3B82F6] hover:text-white p-2 font-bold" to={"/myprofile"}>My profile</Link>
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
              <button className="btn bg-[#3B82F6] lg:px-8 text-white font-bold rounded-md text-lg">
                Login
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
