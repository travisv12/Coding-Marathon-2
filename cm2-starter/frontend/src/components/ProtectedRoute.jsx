// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, redirectPath = "/login"}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default ProtectedRoute;
