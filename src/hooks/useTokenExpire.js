import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isTokenExpired } from "../utils/token";


const TokenExpireValidation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      console.log("Cek token expire...");
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  
      if (!token || await isTokenExpired(token)) {
        console.log("Token expired, redirecting to login...");
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        navigate("/login");
      }
    };
  
    checkToken();
    const validationToken = setInterval(checkToken, 1000);
    return () => clearInterval(validationToken);
  }, [navigate]);  
};

export default TokenExpireValidation;