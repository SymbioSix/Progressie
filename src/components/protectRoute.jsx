import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const Protect = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const role = localStorage.getItem("role") || sessionStorage.getItem("role");

  if (token) {
    try {
      const payloadToken = jwtDecode(token);
      const tokenExp = payloadToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (tokenExp > currentTime) {
        if (allowedRoles.includes(role)) {
          return children;
        } 
        else {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          return <Navigate to="/unauthorized" />;
        }
      } else {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        return <Navigate to="/login" />;
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

Protect.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Protect;