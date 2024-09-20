import api from "../utils/request";

export const GetFooter = async () => {
  try {
    const response = await api.get("/footer");
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const GetFooterId = async (id) => {
  try {
    const response = await api.get(`/footer/${id}`);
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