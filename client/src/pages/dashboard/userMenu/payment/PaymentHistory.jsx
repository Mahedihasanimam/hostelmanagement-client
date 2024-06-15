import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../../../../hooks/UseAxiosSecure";
import UseAuth from "../../../../hooks/UseAuth";

const PaymentHistory = () => {
    const {user}=UseAuth()

    const {data:pay=[],refetch}=useQuery({
        queryKey:['pay'],
        queryFn:async()=>{
            const {data}=await AxiosSecure('/payment')
       
            return data
        }
    })
const mypay=pay.filter(i=>i.email===user?.email)
 console.log(pay);
    return (
        <div className="overflow-x-auto min-h-screen my-8 px-4">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-100 text-black" >
            <tr>
        
              <th>TransectionId</th>
              <th>Email</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
                mypay.map(p=><tr className="even:text-black" key={p._id}>
                    {/* row 1 */}
                    
                      <td>
                         {p.transectionId}
                     
                      </td>
                      <td>
                          {p.email}
                      </td>
                      <td>
                          {p.date}
                      </td>
                      <td>
                          ${p.price}
                      </td>
                    </tr>)
            }
  
  
            
          </tbody>
        </table>
        {
          mypay.length<1 && <div className="flex my-8 mx-auto  flex-row px-4 lg:w-[1000PX]  pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-900 dark:bg-gray-50 border-violet-400 dark:border-violet-600">
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
            <h1 className="lg:text-4xl text-xl font-bold text-white">Ooops! No  payment history Found </h1>
          </div>
       
        </div>
        }
      </div>
    );
};

export default PaymentHistory;