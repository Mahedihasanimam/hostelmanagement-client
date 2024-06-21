import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UpcomCard from "./UpcomCard";


const UpCommingMeal = () => {

    const AxiosSecure=UseAxiosSecure()
    const {data:upcommingmeals=[],refetch}=useQuery({
        queryKey:['upcommingmeals'],
        queryFn:async()=>{
            const {data}=await AxiosSecure('/upcommingmeals')
            return data
        }
    })
    return (
        <div className="mt-28">
           <div className="">
            {
                upcommingmeals.map(meal=><UpcomCard key={meal._id} meal={meal} refetch={refetch}></UpcomCard>)
            }
           </div>
        </div>
    );
};

export default UpCommingMeal;