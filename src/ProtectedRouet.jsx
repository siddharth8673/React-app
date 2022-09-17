import React from "react";
import { UserAuth } from "./context/authcontext";
import { NavLink, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (!user) {
    
    navigate('/')
  }
  return children;
};

export default ProtectedRoute;
