import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex -ml-0.5 max-w-[1400px] mx-auto gap-4">
      {/* Dashboard Sidebar */}
      <div className="w-56 min-h-screen bg-slate-800 p-10">
        <Link className="text-xl font-bold text-white" to={"/allUsers"}>All Users</Link>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
