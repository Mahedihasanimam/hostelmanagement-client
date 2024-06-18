import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Dashboard = () => {
    return (
        <div>
        {/* sidebar  */}
        <div className="relative  md:flex">
          <div>
            <Sidebar />
          </div>
        </div>
        {/* outlate */}
        <div className="flex-1 mt-0  md:ml-64 ">
          <Outlet />
        </div>
      </div>
    );
};

export default Dashboard;