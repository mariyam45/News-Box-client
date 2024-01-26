import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthPorvider";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoutes;
