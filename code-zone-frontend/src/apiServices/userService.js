import { api } from "./api";

export const getUserData = async () => {
  try {
    const response = await api.get("/user");
    console.log("Api Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};
