import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./UseAxiosCommon";




const UseCard = () => {
   
    const axiosCommon=useAxiosCommon()
    const {data:card=[],isLoading,fetchNextPage,refetch:cardreftch}=useQuery({
        queryKey:['card'],
        queryFn:async()=>{
            const res=await axiosCommon.get(`/meals`)
            return res.data
        }
    })
   
    
    return [card,isLoading,fetchNextPage,cardreftch]
};

export default UseCard;