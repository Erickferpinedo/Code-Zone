// THIS WILL 

import { api } from "./api";

// needs the attempt data to add to database
// returns the data not mandatory for use just there to be accessible
export const createAttempt = async (attempt) => {
  try {
    const response = await api.post("/attempt", attempt);
    console.log("Attempt created successfully", response.data);
    return await response.data;
  } catch (error) {
    console.error("Error attempt was not created before database:", error);
    throw error;
  }
};

// needs the question name as parameter to using call for querying database
// return an object of the question {}
export const getAttempt = async (questionName) => {
  try {
    const response = await api.get(`/attempt/${questionName}`);
    console.log("Attempt recived:", response.data);
    return await response.data;
  } catch (error) {
    console.error(
      "There was an error getting a specific attempt before database:",
      error
    );
  }
};

// this gets all attempts for the logged in user and returns it in a list of objects [{},{},{}]
export const getAttempts = async () => {
  try {
    const response = await api.get("/attempt/all");
    console.log("All attempts received:", response.data);
    return await response.data;
  } catch (error) {
    console.error(
      "There was an error getting all attempts for this user before database:",
      error
    );
  }
};

// this deletes a question and takes the question name as parameter
export const deleteAttempt = async (questionName) => {
  try {
    const response = await api.delete(`/attempt/${questionName}`);
    console.log("The attempt was deleted:", response.data);
    return await response.data;
  } catch (error) {
    console.error(
      "There was an error trying to delete the attempt before database:",
      error
    );
  }
};
