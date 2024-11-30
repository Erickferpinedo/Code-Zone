import { getAttempts } from "../../apiServices/attemptService";

function getAllLoggedLeetCodes() {
    const allAttempts = getAttempts();
    return allAttempts;


}

export { getAllLoggedLeetCodes };
