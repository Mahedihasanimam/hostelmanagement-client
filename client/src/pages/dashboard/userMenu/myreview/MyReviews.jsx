import PropTypes from 'prop-types'
import UseAuth from '../../../../hooks/UseAuth'
import MealReview from '../../../../components/mealreview/MealReview'
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import MyButton from '../../../../components/MyButton';

import Swal from 'sweetalert2';
import { axiosCommon } from '../../../../hooks/UseAxiosCommon';
import { Link } from 'react-router-dom';
const MyReviews = () => {
  const {user}=UseAuth()

  const [mealreview,isLoading,refetch]=MealReview()
  const mymealreview=mealreview.filter(i=>i.email===user?.email)
  

  const handleMyReviewDelete=async(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this query!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    
    .then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your query has been deleted.",
          icon: "success"
        });
        
        try{
          const {data}= await axiosCommon.delete(`${import.meta.env.VITE_API_URL}/myreview/${id}`,)
          refetch()
        }
         catch(err){
          console.log(err)
         }
      }
    });
  }
  return (
    <div>
    <div className="overflow-x-auto min-h-screen my-8 px-4">
      <table className="table">
        {/* head */}
        <thead className="bg-blue-100 text-black" >
          <tr>
      
            <th>meal title</th>
            <th>Liks</th>
            <th>Review Details</th>
            <th>View Meals</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              mymealreview.map(reco=><tr className="even:text-black" key={reco._id}>
                  {/* row 1 */}
                  
                    <td>
                       {reco.title}
                   
                    </td>
                    <td>
                        {reco.likeCount}
                    </td>
             
                    <td>
                       {reco.review.slice(0,100)}
                    </td>
                    <th>
                   <Link to={`/details/${reco._id}`}>
                   <button className='btn btn-sm rounded-full bg-blue-500 text-white'>View Meal</button>
                   </Link>
                    </th>
                  
                    <th>
                      <button onClick={()=>handleMyReviewDelete(reco._id)} className="btn btn-ghost ">
                          <RiDeleteBin6Line size={25}/>
                         
                      </button>
                      <Link to={`/dashboard/editreview/${reco._id}`} className="btn btn-ghost ">
                          <CiEdit size={25}/>
                         
                      </Link>
                    </th>
                  </tr>)
          }


          
        </tbody>
      </table>
      {
        mymealreview.length<1 && <div className="flex my-8 mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
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
  )
}

MyReviews.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default MyReviews