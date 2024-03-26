/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom";
const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  //   console.log(user);
  if (!user) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};
export default ProtectRoute;
