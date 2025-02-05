import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Allusers from "../pages/Allusers/Allusers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/allUsers",
        element: <Allusers />,
      },
    ],
  },
]);

export default router;
