// utils/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, roles }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.role);



    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (roles && roles.length > 0 && !roles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children
};

export default PrivateRoute;
