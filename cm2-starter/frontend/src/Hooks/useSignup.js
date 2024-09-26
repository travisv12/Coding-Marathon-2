// src/hooks/useSignup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
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
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate("/login");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.error || "Signup failed");
      }
    } catch (error) {
      setErrorMessage("Error during signup: " + error.message);
    }
  };

  return {
    formData,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};

export default useSignup;
