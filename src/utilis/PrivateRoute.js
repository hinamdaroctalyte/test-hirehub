// utils/PrivateRoute.js
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { redirectToDashboard } from "./RedirectionToDashboard";


const PrivateRoute = ({ children, roles }) => {
    const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
    const user = useSelector((state) => state?.auth?.user);
    console.log({user, isAuthenticated});
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already authenticated
        if (user) {
          redirectToDashboard(user?.Role, navigate);
        }
      }, []);



    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (roles && roles.length > 0 && !roles.includes(user?.Role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children
};

export default PrivateRoute;
