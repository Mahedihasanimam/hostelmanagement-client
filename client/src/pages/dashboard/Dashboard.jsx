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
        <div className="flex-1  md:ml-64  bg-slate-100">
          <Outlet />
        </div>
      </div>
    );
};

export default Dashboard;