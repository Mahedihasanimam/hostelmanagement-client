import { useState } from "react"
import UseAuth from "../../hooks/UseAuth"
import { Link } from "react-router-dom"

import logo from "../../assets/logo.png"

import { IoMdMenu, IoMdSettings } from "react-icons/io";

import UserMenu from "./userMenu/UserMenu"
import AdminMenu from "./AdminMenu/AdminMenu"
const Sidebar = () => {
  const { logout } = UseAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  const isAdmin=true
  return (
    <div className="flex gap-6">
      {/* Small Screen Navbar */}
      <div className='  flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <IoMdMenu  className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='200'
                  height='200'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          {
            isAdmin&&<AdminMenu/> || <UserMenu/>
          }
          
          
        </div>

        <div>
          <hr />

   
          <button
            onClick={logout}
            className='flex w-full items-center px-4 py-2 mt-5  bg-[#60A5FA] text-white transition-colors duration-300 transform'
          >
            <IoMdSettings className='w-5 h-5' />
           
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      
      </div>
      
    </div>
  )
}

export default Sidebar