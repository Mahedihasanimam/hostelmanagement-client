import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/UseAxiosCommon";




const MealReview = () => {
    const axiosCommon=useAxiosCommon()
    const {data:mealreview=[],isLoading,refetch}=useQuery({
        queryKey:['review'],
        queryFn:async()=>{
            const {data}=await axiosCommon('/mealreview')
            return data
        }
    })
    return [mealreview,isLoading,refetch]
};

export default MealReview;