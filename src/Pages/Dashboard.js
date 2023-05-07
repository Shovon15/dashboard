import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Page A", uv: 300, pv: 2000, amt: 2400 },
    { name: "Page B", uv: 800, pv: 2900, amt: 2800 },
    { name: "Page C", uv: 400, pv: 2400, amt: 2200 },
    { name: "Page D", uv: 600, pv: 2600, amt: 2300 },
  ];

  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div>
      <Typography variant="h3">Dashoboard</Typography>
      <Typography variant="h6" className="text-start p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <div className="flex  justify-center mt-5">{renderLineChart}</div>
    </div>
  );
};

export default Dashboard;
