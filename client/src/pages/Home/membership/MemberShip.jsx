import MyButton from "../../../components/MyButton";
import useAxiosCommon from "../../../hooks/UseAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import MemberCard from "./MemberCard";
import { ImSpinner9 } from "react-icons/im";

const MemberShip = () => {

  const axiosCommon=useAxiosCommon()
  const {data:member=[],isLoading}=useQuery({
    queryKey:['membership'],
    queryFn:async()=>{
      const {data}=await axiosCommon('/membership')
      return data
    }
  })
  if (isLoading && !member.length) {
    return (
      <ImSpinner9
        size={40}
        className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
      />
    );
  }
  return (
    <div>
      <section className="py-20 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <div className=" space-y-3 text-center my-6 ">
              <h1 className="text-4xl font-bold lg:text-6xl">
              Premium Membership
              </h1>
              <p>
                Meals by Category" offers diverse options like Breakfast, Lunch,
                and Dinner. Each category features delicious meals with detailed
                descriptions!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
              member.map(item=><MemberCard key={item._id} item={item}/>)
            }
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberShip;
