import { jwtDecode } from "jwt-decode";


export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decodedToken = jwtDecode(token);
    console.log("Token yang ter decoded : ", decodedToken);
    const currentTime = Math.floor(Date.now() / 1000);
    console.log("Waktu sekarang : ", currentTime, "Waktu token expire", decodedToken.exp);
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token : ", error);
    return true;
  }  
};