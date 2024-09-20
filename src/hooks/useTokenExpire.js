import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isTokenExpired } from "../utils/token";


const TokenExpireValidation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
      if (!token || await isTokenExpired(token)) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    };
  
    checkToken();
    const validationToken = setInterval(checkToken, 1000);
    return () => clearInterval(validationToken);
  }, [navigate]);  
};

export default TokenExpireValidation;