import api from "../utils/request";


export const getTodolist = async () => {
  try {
    const response = await api.get("/todolist");
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const getTodolistById = async (id) => {
  try {
    const response = await api.get(`/todolist/${id}`);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const createTodolist = async (data) => {
  try {
    const response = await api.post("/todolist", data);
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