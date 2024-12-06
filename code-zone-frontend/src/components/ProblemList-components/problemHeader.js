import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import "./problem-List.css"; // Import CSS

const ProblemHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className="star-cell"></TableCell>
        <TableCell className="table-header">Question Name</TableCell>
        <TableCell className="table-header">Question Description</TableCell>
        <TableCell className="table-header">Last Attempt</TableCell>
        <TableCell className="table-header" align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ProblemHeader;
