import api from "../utils/request";

export const getTodoCustomTargetById = async (id) => {
  try {
    const response = await api.get("/todo/custom_targets/user");
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const createTodoCustomTarget = async (data) => {
  try {
    const response = await api.post("/todo/custom_targets", data);
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const getTodoSubcourseById = async (id) => {
  try {
    const response = await api.get("/todo/subcourse_reminders/user");
    return response.data;
  } catch (error) {
    validateError(error);
  }
};

export const createTodoSubcourse = async (data) => {
  try {
    const response = await api.post("/todo/subcourse_reminders");
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