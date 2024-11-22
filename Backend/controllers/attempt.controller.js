import Attempts from '../models/model.attempt.js';


export const createAttempt = async (req, res) => {
    try {
        const attempt = await Attempts.create(req.body);
        res.status(200).json(attempt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAttempt = async (req, res) => {
    try {
        const { id } = req.params;
        const attempt = await Attempts.findById(id);
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
        const attempts = await Attempts.find({});
        res.status(200).json(attempts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateAttempt = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAttempt = await Attempts.findByIdAndUpdate(id, req.body, { new: true });
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
        const { id } = req.params;
        const attempt = await Attempts.findByIdAndDelete(id);
        if (!attempt) {
            return res.status(404).json({ message: "Attempt Not Found" });
        }
        res.status(200).json({ message: "Attempt Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};