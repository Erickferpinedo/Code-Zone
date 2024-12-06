import Notification from "../models/model.notification.js";

// Create a new notification
export const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single notification by ID
export const getNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id).populate("userId attemptId");

    if (!notification) {
      return res.status(404).json({ message: "Notification Not Found" });
    }

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all notifications
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({}).populate("userId attemptId");
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a notification by ID
export const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNotification = await Notification.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedNotification) {
      return res.status(404).json({ message: "Notification Not Found" });
    }

    res.status(200).json(updatedNotification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a notification by ID
export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(404).json({ message: "Notification Not Found" });
    }

    res.status(200).json({ message: "Notification Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
