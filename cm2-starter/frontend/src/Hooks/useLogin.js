// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.token);
        navigate("/");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("Error during login: " + error.message);
    }
  };

  return {
    formData,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
