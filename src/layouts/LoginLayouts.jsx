import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const LoginLayouts = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet />
    </div>
  );
};

export default LoginLayouts;
