import { useQuery } from "@tanstack/react-query";
import UseAxiosCommon from "./UseAxiosCommon";
import UseAxiosSecure from "./UseAxiosSecure";



const UseCard = () => {
    const AxiosSecure=UseAxiosSecure()
    const {data:card=[],isLoading,fetchNextPage,refetch:cardreftch}=useQuery({
        queryKey:['card'],
        queryFn:async()=>{
            const res=await AxiosSecure.get('/meals')
            return res.data
        }
    })
   

    return [card,isLoading,fetchNextPage,cardreftch]
};

export default UseCard;