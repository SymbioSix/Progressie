import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SignOut } from "../services/auth";


export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);
    const [userData, setUserData] = useState(null);

    const login = (token, role, dataUser, rememberMe) => {
        if (rememberMe) {
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("dataUser", JSON.stringify(dataUser));
        } else {
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("dataUser", JSON.stringify(dataUser));
        }
        setUserRole(role);
        setUserData(dataUser);
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const role = localStorage.getItem('role') || sessionStorage.getItem('role');
        const storedDataUser = localStorage.getItem('dataUser') || sessionStorage.getItem('dataUser');
    
        if (token && role && storedDataUser) {
            setUserRole(role);
            setUserData(JSON.parse(storedDataUser));
        }
    }, []);    

    const logout = async () => {
        await SignOut();
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        localStorage.removeItem("role");
        sessionStorage.removeItem("role");
        localStorage.removeItem("dataUser");
        sessionStorage.removeItem("dataUser");
        setUserRole(null);
        setUserData(null);
    };

    return (
        <UserContext.Provider value={{ userRole, userData, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};