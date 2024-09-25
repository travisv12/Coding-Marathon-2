// src/components/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication state
    setIsAuthenticated(false);
    // Redirect to login page
    navigate("/login");
  }, [navigate, setIsAuthenticated]);

  return null;
};

export default Logout;
