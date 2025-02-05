import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Allusers from "../pages/Allusers/Allusers";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import UserDetails from "../pages/UserDetails/UserDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/allUsers",
        element: <Allusers />,
      },
      {
        path: "/userDetails/userId/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
