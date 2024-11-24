// Next_Button.js
import React from "react";
import "./next_button.css";
import { createAttempt } from "../../apiServices/attemptService";

const Next_Button = ({
  selectedFace,
  selectedQuestionType,
  lastAttemptDate,
  nextReminderDate,
  inputQuestionName,
  inputQuestionDescription,
}) => {
  const handleSubmit = async () => {
    try {
      // validate everything is entered
      if (
        selectedQuestionType === "Select Type" ||
        !lastAttemptDate ||
        !selectedFace ||
        !inputQuestionName
      ) {
        alert("Please fill all required fields!");
        return;
      }
      //map out faces to a difficulty for database
      const faceToDifficultyMap = {
        smile: "easy",
        neutral: "medium",
        sad: "hard",
      };

      // create the map for the attempt data user id will be added on the backend
      const attemptData = {
        difficulty: faceToDifficultyMap[selectedFace],
        questionType: selectedQuestionType,
        lastAttempt: lastAttemptDate.toISOString(),
        nextReminder: nextReminderDate ? nextReminderDate.toISOString() : null,
        questionName: inputQuestionName,
        questionDescription: inputQuestionDescription,
      };

      //testing
      console.log("Attempt Data:", attemptData);

      // send the attempt data to the backend
      const response = await createAttempt(attemptData);

      //testing
      console.log("Attempt saved:", response);
      alert("Attempt saved successfully!");
    } catch (error) {
      // differentiate the errors for debugging
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        alert(`Failed to save attempt: ${error.response.data.message}`);
      } else {
        console.error("Error saving attempt:", error);
        alert("Failed to save attempt.");
      }
    }
  };

  return (
    <div className="button-container">
      <button onClick={handleSubmit} className="next_button">
        Save
      </button>
      <button className="delete_button">Delete</button>
    </div>
  );
};

export default Next_Button;
