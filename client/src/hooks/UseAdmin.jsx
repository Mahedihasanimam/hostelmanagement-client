import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const UseAdmin = () => {
  const AxiosSecure=UseAxiosSecure()
  const {user}=UseAuth()
  const email=user?.email
    const { data: isAdmin, isLoading,refetch } = useQuery({
        queryKey: [email,"isAdmin"],
        queryFn: async () => {
          const { data } = await AxiosSecure.get(`/users/user/admin/${email}`);
          return data.admin
        },
        // enabled:!!localStorage.getItem('accesstoken')
      });

      return[isAdmin,isLoading,refetch]
};

export default UseAdmin;