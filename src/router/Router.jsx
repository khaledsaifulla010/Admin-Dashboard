import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Allusers from "../pages/Allusers/Allusers";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import UserDetails from "../pages/UserDetails/UserDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyProducts from "../pages/MyProducts/MyProducts";
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
        path: "/productDetails/productId/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://api.restful-api.dev/objects/${params.id}`),
      },
      {
        path: "/myProducts",
        element: <MyProducts />,
        loader:()=>fetch
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
