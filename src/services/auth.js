import api from "../utils/request";

export const signUpSuperadmin = async (data) => {
  try {
    const response = await api.post("/auth/signup-super", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const signUpAdmin = async (data) => {
  try {
    const response = await api.post("/auth/signup-admin", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const signUpUser = async (data) => {
  try {
    const response = await api.post("/auth/signup-email-password", data);
    return response.data;
  } catch (error) {
    validateError(error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password
    };

    const response = await api.post("/auth/signin-email-password", data);
    const dataUser = response?.data?.result?.data;
    const token = response?.data?.result?.access_token;
    const role = response?.data?.result?.data?.role_data?.role_name;

    if (token && role && dataUser) {
      return { token, role, dataUser };
    } else {
      console.log("something wrong to get role or token")
    }
  } catch (error) {
    validateError(error);
    throw error;
  }
};

export const SignOut = async () => {
  try {
    const response = await api.post("/auth/signout");
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const validateError = (error) => {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      window.location.href = "/login";
    }
    throw new Error(error.response.data.message);
  } else {
    throw new Error(error.message);
  }
};