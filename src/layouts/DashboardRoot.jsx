import React from "react";
import { Outlet } from "react-router-dom";

const DashboardRoot = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DashboardRoot;
