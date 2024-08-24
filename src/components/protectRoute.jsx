import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const Protect = ({ children }) => {
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  if (token) {
    try {
      const payloadToken = JSON.parse(atob(token.split(".")[1]));
      const tokenExp = payloadToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (tokenExp > currentTime) {
        return children;
      } else {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        return <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

Protect.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protect;