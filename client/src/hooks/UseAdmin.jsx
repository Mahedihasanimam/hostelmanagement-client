import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseAdmin = () => {
  const {user}=UseAuth()
    const { data: isAdmin = [], isLoading,refetch } = useQuery({
        queryKey: ["isAdmin"],
        queryFn: async () => {
          const { data } = await AxiosSecure(`/users/admin/${user?.email}`);
          return data;
        },
      });
      return[isAdmin,isLoading,refetch]
};

export default UseAdmin;