import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard";
import Ecommerce from "../../Pages/Ecommerce";
import Inbox from "../../Pages/Inbox";
import Profile from "../../Pages/Profile";
import Setting from "../../Pages/Setting";
import Logout from "../../Pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/e-commerce",
        element: <Ecommerce />,
      },
      {
        path: "/dashboard/inbox",
        element: <Inbox />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/setting",
        element: <Setting />,
      },
      {
        path: "/dashboard/logout",
        element: <Logout />,
      },
    ],
  },
]);
export default router;
