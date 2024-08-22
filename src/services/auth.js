import api from "../../utils/request";


export const signUpSuperadmin = async (data) => {
  try {
    const response = await api.post("/v1/auth/signup-super", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const signUpAdmin = async (data) => {
  try {
    const response = await api.post("/v1/auth/signup-admin", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const signUpUser = async (data) => {
  try {
    const response = await api.post("/v1/auth/signup-email-password", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const signIn = async (data) => {
  try {
    const response = await api.post("/v1/auth/signin-email-password", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

const validateError = (error) => {
  if (error.response) {
    console.error(
      "Error : ",
      error.response.data.message || error.response.data
    );
  } else if (error.request) {
    console.error("No response received : ", error.request);
  } else {
    console.error("Error : ", error.message);
  }
  throw error;
};