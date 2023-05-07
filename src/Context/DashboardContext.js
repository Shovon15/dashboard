import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardCOntextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const dashboardInfo = {
    open,
    setOpen,
  };
  return (
    <DashboardContext.Provider value={dashboardInfo}>
      {children}
    </DashboardContext.Provider>
  );
};
