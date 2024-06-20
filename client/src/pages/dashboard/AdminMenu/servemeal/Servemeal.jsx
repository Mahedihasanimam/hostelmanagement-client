import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../hooks/UseAuth";
import { AxiosSecure } from "../../../../hooks/UseAxiosSecure";
import { IoCloseSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Servemeal = () => {
  const {user}=UseAuth()
  const { data: reqMeal = [],refetch } = useQuery({
    queryKey: ["reqmeal"],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/requestedmeal`);
      return data;
    },
  });
  // console.log(reqMeal.e?.email);


  const handleserve = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "do you want to serve this meal?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Serve this!"
      })
      
      .then(async(result) => {
        // const {data}=await axiosCommon.delete(`/requestmeal/${id}`)
        // console.log(data);
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your query has been deleted.",
            icon: "success"
          });
          try{
            const {data}= await axiosCommon.delete(`${import.meta.env.VITE_API_URL}/requestmeal/${id}`)
            refetch()
          }
           catch(err){
            console.log(err)
           }
        }
      });
  };
// console.log('slkdjfldfj',myReqMeal[0].e);
  return (
    <div>
      <div className="overflow-x-auto min-h-screen my-8 px-4">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-100 text-black">
            <tr>
              <th>Meal title</th>
              <th>Email</th>
              <th>Name</th>
              <th>Review Details</th>
              <th>Status</th>
              {/* <th>email</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reqMeal.map((reco) => (
              
              <tr className="even:text-black" key={reco._id}>
               

                <td>{reco?.e?.title}</td>
                <td>{reco?.e?.email||'no@gmail.com'}</td>
                <td>{reco?.e?.distributor||'name not found'}</td>
                
                <td>{reco?.e?.details?.slice(0, 50)}</td>
                <td><button className="btn btn-sm bg-red-500 hover:bg-red-500 text-white rounded-full">pending</button></td>
                {/* <td>{reco.email}</td> */}
                <th>
                  <button
                    onClick={() => handleserve(reco._id)}
                    className="btn btn-sm rounded-full bg-blue-400 hover:bg-blue-400 text-white"
                  >
                   Serve
                  </button>
                 
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {reqMeal.length < 1 && (
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
                Ooops! No Requested meal yeat{" "}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Servemeal;
