import { useQuery } from "@tanstack/react-query";
import UseAxiosCommon from "./UseAxiosCommon";



const UseCard = () => {
    const axiosCommon=UseAxiosCommon()
    const {data:card=[],isLoading,fetchNextPage }=useQuery({
        queryKey:['card'],
        queryFn:async()=>{
            const res=await axiosCommon.get('/meals')
            return res.data
        }
    })
   

    return [card,isLoading,fetchNextPage]
};

export default UseCard;