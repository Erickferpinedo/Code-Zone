import React from "react";
import { TableCell, IconButton, Menu, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { truncateText } from "./helpers";
import "./problemList.css"; // Import CSS

const ProblemRow = ({ problem, toggleStar, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete(problem);
    handleMenuClose();
  };

  const handleEditProblem = () => {
    console.log("Edit Problem clicked for:", problem);
    handleMenuClose();
  };

  const handleAddReminder = () => {
    console.log("Add Reminder clicked for:", problem);
    handleMenuClose();
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      layout
    >
      <TableCell className="star-cell">
        <IconButton onClick={() => toggleStar(problem)}>
          {problem.starred ? (
            <StarIcon color="primary" />
          ) : (
            <StarBorderIcon />
          )}
        </IconButton>
      </TableCell>
      <TableCell>{truncateText(problem.questionName, 20)}</TableCell>
      <TableCell>{truncateText(problem.questionDescription, 50)}</TableCell>
      <TableCell>
        {new Date(problem.lastAttempt).toLocaleString() || "No date available"}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleMenuOpen} aria-label="actions">
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEditProblem} className="menu-item">
            Edit Problem
          </MenuItem>
          <MenuItem onClick={handleAddReminder} className="menu-item">
            Add Reminder
          </MenuItem>
          <MenuItem onClick={handleDelete} className="menu-item">
            Delete
          </MenuItem>
        </Menu>
      </TableCell>
    </motion.tr>
  );
};

export default ProblemRow;
