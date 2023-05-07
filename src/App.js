import "./App.css";
import { Button } from "@material-tailwind/react";
import SideBar from "./SideBar";
import Nav from "./Nav";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <DashboardLayout /> */}
    </div>
  );
}

export default App;
