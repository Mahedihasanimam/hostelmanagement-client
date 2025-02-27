
import UseAuth from "../hooks/UseAuth";
import UseAdmin from "../hooks/UseAdmin";
import { ImSpinner9 } from "react-icons/im";


const AdminRoute = ({children}) => {
   const {user,loder}=UseAuth()
   const [isAdmin,isLoading]=UseAdmin()
   if(loder || isLoading){
    return <ImSpinner9
    size={40}
    className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
  />
  }
  if(user && isAdmin){
    return children
 }
 
};

export default AdminRoute;