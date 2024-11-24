//import { api } from "./api";

import { api } from "./api"

export const createAttempt = async (attempt) => {
    try {
    const response = await api.post("/attempt", attempt);
    console.log("Attempt created successfully", response.data);
    return (await response).data;
    } catch (error){
        console.error("Error attempt was not created", error);
        throw error;
    }
}