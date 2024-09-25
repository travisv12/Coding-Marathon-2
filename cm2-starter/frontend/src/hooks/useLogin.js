import { useNavigate } from "react-router-dom";

export const useLogin = (setIsAuthenticated, email, password) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed", response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return { handleLogin };
};
