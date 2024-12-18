import Attempts from "../models/model.attempt.js";

export const createAttempt = async (req, res) => {
  try {
    const attemptData = {
      ...req.body,
      userId: req.user._id,
    };
    const { id } = req.user;
    const qName = attemptData.questionName;

    const attempt = await Attempts.findOneAndUpdate(
      { userId: id, questionName: qName },
      attemptData,
      { upsert: true, new: true }
    );
    res.status(200).json(attempt);

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Duplicate attempt detected" });
    }
    
    res.status(500).json({ message: error.message });
    console.error("Error creating attempt:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAttempt = async (req, res) => {
  try {
    const { id } = req.user;
    const { qName } = req.params;
    const attempt = await Attempts.findOne({ userId: id, questionName: qName });
    if (!attempt) {
      return res.status(404).json({ message: "Attempt Not Found" });
    }
    res.status(200).json(attempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttempts = async (req, res) => {
  try {
    const { id } = req.user;
    const attempts = await Attempts.find({ userId: id });
    res.status(200).json(attempts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAttempt = async (req, res) => {
  try {
    const { id } = req.user;
    const { qName } = req.params;
    const updatedAttempt = await Attempts.findOneAndReplace(
      { userId: id, questionName: qName },
      req.body,
      {
        new: true,
      }
    );
    if (!updatedAttempt) {
      return res.status(404).json({ message: "Attempt Not Found" });
    }
    res.status(200).json(updatedAttempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAttempt = async (req, res) => {
  try {
    const { qName } = req.params;
    const { id } = req.user;
    const attempt = await Attempts.findOneAndDelete({
      userId: id,
      questionName: qName,
    });
    if (!attempt) {
      return res.status(404).json({ message: "Attempt Not Found" });
    }
    res.status(200).json({ message: "Attempt Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
