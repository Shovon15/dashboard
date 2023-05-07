import { Typography } from "@material-tailwind/react";
import React from "react";
import LineChartComponent from "../Component/LineChartComponent";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="h6" className="text-start p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <LineChartComponent />
    </div>
  );
};

export default Dashboard;
