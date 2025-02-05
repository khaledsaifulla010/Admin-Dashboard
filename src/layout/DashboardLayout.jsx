import { FaBoxes, FaSignInAlt, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex -ml-0.5 max-w-[1400px] mx-auto gap-4">
      {/* Dashboard Sidebar */}
      <div className="w-56 min-h-screen bg-slate-800  ">
        <ul className="menu p-10">
          <li>
            <Link className="text-xl font-bold text-white" to={"/allUsers"}>
              <FaUsers />
              All Users
            </Link>
          </li>
          <li>
            <Link className="text-xl font-bold text-white" to={"/products"}>
              <FaBoxes />
              Products
            </Link>
          </li>
          <li>
            <Link className="text-xl font-bold text-white" to={"/login"}>
              <FaSignInAlt />
              Login
            </Link>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
