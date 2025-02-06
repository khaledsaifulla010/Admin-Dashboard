import { FaBoxes, FaBoxTissue, FaSignInAlt, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex lg:-ml-0.5 lg:w-[1400px] w-[640px] mx-auto lg:gap-4">
      {/* Dashboard Sidebar */}
      <div className="lg:w-56 w-36  min-h-screen bg-slate-800  ">
        <ul className="menu px-6 py-10">
          <li>
            <NavLink
              to="/allUsers"
              className={({ isActive }) =>
                `lg:text-xl mt-6 font-bold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                  isActive ? "bg-red-500" : "bg-transparent"
                }`
              }
            >
              <FaUsers />
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `lg:text-xl mt-6 font-bold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                  isActive ? "bg-red-500" : "bg-transparent"
                }`
              }
            >
              <FaBoxes />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/addAProduct"}
              className={({ isActive }) =>
                `lg:text-xl mt-6 font-bold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                  isActive ? "bg-red-500" : "bg-transparent"
                }`
              }
            >
              <FaBoxTissue />
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `lg:text-xl mt-6 font-bold text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                  isActive ? "bg-red-500" : "bg-transparent"
                }`
              }
            >
              <FaSignInAlt />
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="lg:w-[1150px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
