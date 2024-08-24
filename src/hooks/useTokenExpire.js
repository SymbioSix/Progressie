import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isTokenExpired } from "../utils/token";


const useTokenCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

      if (!token || await isTokenExpired(token)) {
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

export default useTokenCheck;