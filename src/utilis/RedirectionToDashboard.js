import { Navigate } from "react-router-dom";

export const redirectToDashboard = (role) => {
  switch (role) {
    case 'admin':
      return <Navigate to='/admin/dashboard' />;
    case 'candidate':
      return <Navigate to='/candidate/dashboard' />;
    case 'employer':
      return <Navigate to='/employer/dashboard' />;
    default:
      // Redirect to a default route
      return <Navigate to='/' />;
  }
};
