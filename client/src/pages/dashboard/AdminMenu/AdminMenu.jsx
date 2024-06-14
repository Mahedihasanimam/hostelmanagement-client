import { CgProfile } from "react-icons/cg";
import { GiMeal, GiPayMoney } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
            <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* my profile */}
              <NavLink
                to=''
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA]  ' : 'text-gray-600'
                  }`
                }
              >
                <CgProfile className='w-5 h-5' />

                <span className='mx-4 font-medium'>Admin Profile</span>
              </NavLink>

              {/* request meals */}
              <NavLink
                to='requestedmeals'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA]  ' : 'text-gray-600'
                  }`
                }
              >
                <GiMeal className='w-5 h-5' />

                <span className='mx-4 font-medium'>Request Meals</span>
              </NavLink>
              {/* My REVIEW */}
              <NavLink
                to='myreview'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white  hover: ${
                    isActive ? 'bg-[#60A5FA]  ' : 'text-gray-600'
                  }`
                }
              >
                <MdRateReview className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Reviews</span>
              </NavLink>
              {/* payment history */}
              <NavLink
                to='paymenthistory'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <GiPayMoney className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
              </NavLink>
            </nav>
          </div>
        </div>
    );
};

export default AdminMenu;