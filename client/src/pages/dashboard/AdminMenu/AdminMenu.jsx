import { CgProfile } from "react-icons/cg";
import { GiAllForOne, GiMeal, GiPayMoney } from "react-icons/gi";
import { MdEggAlt, MdNoMeals, MdRateReview, MdSetMeal } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const AdminMenu = ({isAdmin}) => {
    return (
        <div>
            <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* admin profile */}
              <NavLink
                to=''
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white ' : 'text-gray-600'
                  }`
                }
              >
                <CgProfile className='w-5 h-5' />

                <span className='mx-4 font-medium'>Admin Profile</span>
              </NavLink>

              {/* manage users */}
              <NavLink
                to='ManageUsers'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <RiUserSearchLine className='w-5 h-5' />

                <span className='mx-4 font-medium'>ManageUsers</span>
              </NavLink>
              {/* add meal */}
              <NavLink
                to='addMeal'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white  hover: ${
                    isActive ? 'bg-[#60A5FA] text-white ' : 'text-gray-600'
                  }`
                }
              >
                <MdSetMeal className='w-5 h-5' />

                <span className='mx-4 font-medium'>AddMeal</span>
              </NavLink>
              {/* allmeals */}
              <NavLink
                to='allmeals'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <GiAllForOne className='w-5 h-5' />

                <span className='mx-4 font-medium'> AllMeals</span>
              </NavLink>
              {/* allreview */}
              <NavLink
                to='allreview'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <GiAllForOne className='w-5 h-5' />

                <span className='mx-4 font-medium'>  AllReviews</span>
              </NavLink>
              {/* serve meal */}
              <NavLink
                to='servemeal'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <GiAllForOne className='w-5 h-5' />

                <span className='mx-4 font-medium'> ServeMeals</span>
              </NavLink>
              {/*  Upcoming Meals*/}
              <NavLink
                to='upcommingmeals'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#60A5FA] hover:text-white   hover: ${
                    isActive ? 'bg-[#60A5FA] text-white  ' : 'text-gray-600'
                  }`
                }
              >
                <GiAllForOne className='w-5 h-5' />

                <span className='mx-4 font-medium'>  UpcomingMeals</span>
              </NavLink>
            </nav>
          </div>
        </div>
    );
};

export default AdminMenu;