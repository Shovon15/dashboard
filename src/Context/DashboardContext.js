import { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

export const DashboardCOntextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 920);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
