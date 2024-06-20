import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { axiosCommon } from "../../../../hooks/UseAxiosCommon";

const Allreview = () => {
  const AxiosSecure=UseAxiosSecure()
    const {data:rev=[],refetch}=useQuery({
        queryKey:['rev'],
        queryFn:async()=>{
            const {data}=await AxiosSecure.get('/mealreview')
            return data
        }
    })
    const handlemealDelete=async(id)=>{
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
              const {data}= await AxiosSecure.delete(`${import.meta.env.VITE_API_URL}/myreview/${id}`,)
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
            <thead className="bg-blue-100 text-black ">
              <tr>
                <th></th>
                <th>title</th>
                <th>like</th>
                <th>reviewCount</th>
                <th>review</th>
                <th>Action</th>

             
              </tr>
            </thead>
            <tbody>
              {rev.map((reco,idx) => (
                <tr className="even:text-black even:bg-blue-50" key={reco._id}>
                  {/* row 1 */}
                <td>{idx+1}</td>
                  <td>{reco.title}</td>
                  <td>{reco.likeCount ||'0' }</td>
                  <td>{reco.reviewCount ||'0'}</td>
                    <td>
                  <Link to={`/details/${reco._id}`}>
                   <button className='btn btn-sm rounded-full bg-blue-500 text-white  '>ViewMeal</button>
                  </Link>
                  
                    </td>
                  
                    <td>
                      <button onClick={()=>handlemealDelete(reco._id)} className="btn btn-ghost ">
                          <RiDeleteBin6Line size={25}/>
                         
                      </button>
                      
                    </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        
        </div>
      </div>
    );
};

export default Allreview;