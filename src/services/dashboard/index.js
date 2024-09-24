import api from "../../utils/request";

export const getProfile = async () => {
    try {
        const response = await api.get("dashboard/profile");
        return response.data;
    } catch (error) {
        validateError(error);
    }
}

export const getSidebarDashboard = async () => {
    try {
        const response = await api.get("dashboard/sidebar");
        return response.data;
    } catch {
        validateError(error);
    }
}

export const getActivityChart = async () => {
    try {
        const response = await api.get("dashboard/activity-chart");
        return response.data;
    } catch {
        validateError(error);
    }
}

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