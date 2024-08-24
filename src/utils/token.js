export const isTokenExpired = async (token) => {
    if (!token) return true;
  
    try {
      const jwt_decode = (await import('jwt-decode')).default;
      const decodedToken = jwt_decode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };
  