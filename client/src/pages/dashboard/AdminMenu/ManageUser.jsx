import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../../../hooks/UseAxiosSecure";

import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";


const ManageUser = () => {
    const {data:users=[],isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const {data}=await AxiosSecure(`/users`)
            return data
        }
    })
    if(isLoading){
        return <ImSpinner9
        size={40}
        className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
      />
    }
    console.log(users);
    return (
        <div>
        <div className="overflow-x-auto min-h-screen my-8 px-4">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-100 text-black" >
              <tr>
          
                <th>email</th>
                <th>name</th>
                <th>Role</th>
               
              </tr>
            </thead>
            <tbody>
              {
                  users.map(reco=><tr className="even:text-black" key={reco._id}>
                      {/* row 1 */}
                      
                        <td>
                           {reco.email}
                       
                        </td>
                        <td>
                            {reco.name || 'no name found'}
                        </td>
                        <td>
                            admin
                        </td>
                      
                  
                      </tr>)
              }
    
    
              
            </tbody>
          </table>
          {
            users.length<1 && <div className="flex my-8 mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="flex-1  p-2 ">
              <h1 className="lg:text-4xl text-xl font-bold text-white">Ooops! No  Review Found </h1>
            </div>
         
          </div>
          }
        </div>
      </div>
    );
};

export default ManageUser;