import { TextField } from "@mui/material";
import "./question.css";

const Question = ({
  questionName,
  questionDescription,
  setQuestionName,
  setQuestionDescription,
}) => {

const handleName = (event) => {
  setQuestionName(event.target.value);
};
const handleDescription = (event) => {
  setQuestionDescription(event.target.value);
};

  return (
    <div className="question">
      <div >
        <TextField
          className="question_title"
          placeholder="[Question Name]"
          variant="standard"
          fullWidth
          value={questionName}
          onChange={handleName}
        />
      </div>
      <div className="question_description">
        <TextField
        className="question_description"
        variant="outlined"
        placeholder="Given an array of integers, write a function to find the length of the
        longest contiguous sub-array where all elements are equal."
        fullWidth
        multiline
        value={questionDescription}
        onChange={handleDescription}
        />
      </div>
    </div>
  );
};
export default Question;
