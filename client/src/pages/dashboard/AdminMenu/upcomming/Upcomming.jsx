import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { axiosCommon } from "../../../../hooks/UseAxiosCommon";



const Upcomming = () => {
    const AxiosSecure=UseAxiosSecure()
    const {data:upcommingmeals=[]}=useQuery({
        queryKey:['upcommingmeals'],
        queryFn:async()=>{
            const {data}=await AxiosSecure('/upcommingmeals')
            return data
        }
    })


    const handlePublish=async(updata)=>{
      
    Swal.fire({
      title: "Are you sure?",
      text: "do you want to add this meal to all meal? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const {data}=await AxiosSecure.post('/addmeal',updata)
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Added!",
            text: "Your meal has been Added to all meal.",
            icon: "success",
          });
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
                <th>Title</th>
                <th>Like</th>
                <th>Review</th>
                <th>Distributor</th>
                <th>Action</th>
              
              </tr>
            </thead>
            <tbody>
              {upcommingmeals.map((reco) => (
                <tr className="even:text-black even:bg-blue-50" key={reco._id}>
                  {/* row 1 */}
  
                  <td>{reco.title||'nai@gmail.com'}</td>
                  <td>{reco.like || '0'}</td>
                  <td>{reco.review ||'no review found' }</td>
                  <td>{reco.distributor || 'not found'}</td>
                    <td>
                 
                   <button onClick={()=>handlePublish(reco)} className='btn btn-sm rounded-full bg-blue-500 text-white  '>Publish</button>
                    </td>
                  
                 
               
                </tr>
              ))}
            </tbody>
          </table>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
  
          {upcommingmeals.length < 1 && (
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
                  Ooops! No upcomming meal Found{" "}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Upcomming;