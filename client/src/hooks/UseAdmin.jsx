import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "./UseAxiosSecure";


const UseAdmin = () => {
    const { data: isAdmin = [], isLoading,refetch } = useQuery({
        queryKey: ["isAdmin"],
        queryFn: async () => {
          const { data } = await AxiosSecure(`/users`);
          return data;
        },
      });
      return[isAdmin,isLoading,refetch]
};

export default UseAdmin;