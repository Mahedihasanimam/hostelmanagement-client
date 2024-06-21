import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseAdmin = () => {
  const AxiosSecure=UseAxiosSecure()
  const {user}=UseAuth()
    const { data: isAdmin, isLoading,refetch } = useQuery({
        queryKey: [user?.email,"isAdmin"],
        queryFn: async () => {
          const { data } = await AxiosSecure.get(`/users/admin/${user?.email}`);
          return data.admin
        },
      });
      return[isAdmin,isLoading,refetch]
};

export default UseAdmin;