import { api } from "./api";

export const getUserData = async () => {
  try {
    const response = await api.get("/user");
    console.log("User data was obtained");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

export const updateUserData = async (updatedData) => { //only param is the data to be changed
  try {
    const response = await api.patch("/user", updatedData);
    console.log('User updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user data:', error.message);
  }
}

// Later to be changed to delete attempts as well
export const deleteUserData = async () => {
  try {
    const response = await api.delete('/user');
    console.log('User deleted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const createUser = async (user) => { // param is the user data in json
  try {
    const response = await api.post('/user', user);
    console.log('User was create successfully', response.data)
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
