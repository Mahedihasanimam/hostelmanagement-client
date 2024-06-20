import { RiDeleteBin6Line } from "react-icons/ri";
import UseCard from "../../../../hooks/UseCard";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { axiosCommon } from "../../../../hooks/UseAxiosCommon";


const Allmeals = () => {
    const [card,refetch]=UseCard()
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
              const {data}= await axiosCommon.delete(`${import.meta.env.VITE_API_URL}/delete/meal/${id}`,)
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
                <th>title</th>
                <th>like</th>
                <th>review</th>
                <th>distributor</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {card.map((reco) => (
                <tr className="even:text-black even:bg-blue-50" key={reco._id}>
                  {/* row 1 */}
  
                  <td>{reco.title||'nai@gmail.com'}</td>
                  <td>{reco.like || '0'}</td>
                  <td>{reco.review ||'no review found' }</td>
                  <td>{reco.distributor || 'not found'}</td>
                    <td>
                  <Link to={`/details/${reco._id}`}>
                   <button className='btn btn-sm rounded-full bg-blue-500 text-white  '>ViewMeal</button>
                  </Link>
                  
                    </td>
                  
                    <td>
                      <button onClick={()=>handlemealDelete(reco._id)} className="btn btn-ghost ">
                          <RiDeleteBin6Line size={25}/>
                         
                      </button>
                      <Link to={`/dashboard/updatemeal/${reco._id}`} className="btn btn-ghost ">
                          <CiEdit size={25}/>
                         
                      </Link>
                    </td>
                  {/* <td>
                    {
                      reco.role==='admin'?<p className="font-bold text-blue-500">Admin</p>:<button
                      onClick={() =>handleMakeAdmin(reco)
                      //   document.getElementById("my_modal_3").showModal()
                      }
                      className="btn btn-sm bg-blue-400 hover:bg-blue-400 text-white rounded-full"
                    >
                      Make Admin
                    </button>
                    }
  
                   
                  </td> */}
                  {/* <td>{reco.badge}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
  
          {/* {users.length < 1 && (
            <div className="flex my-8 mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
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
                <h1 className="lg:text-4xl text-xl font-bold text-white">
                  Ooops! No Review Found{" "}
                </h1>
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
};

export default Allmeals;