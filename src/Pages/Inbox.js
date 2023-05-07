import { Typography } from "@material-tailwind/react";
import React from "react";

const Inbox = () => {
  return (
    <div>
      <Typography variant="h3">Inbox</Typography>
      <div className="m-12 ">
        <img
          className="h-full w-full rounded-lg"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Inbox;
