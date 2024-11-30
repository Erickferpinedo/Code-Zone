import React, { useState } from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import ProblemHeader from "./problemHeader";
import ProblemRow from "./problemRow";
import { AnimatePresence } from "framer-motion";

function ProblemList({ problems, onDelete }) {
  const [localProblems, setLocalProblems] = useState(
    problems.map((problem) => ({ ...problem, starred: false }))
  );

  const toggleStar = (problem) => {
    setLocalProblems((prevProblems) =>
      prevProblems.map((p) =>
        p === problem ? { ...p, starred: !p.starred } : p
      )
    );
  };

  const sortedProblems = [...localProblems].sort((a, b) => b.starred - a.starred);

  const handleDelete = (problem) => {
    onDelete(problem);
    setLocalProblems((prevProblems) =>
      prevProblems.filter((p) => p !== problem)
    );
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "20px auto" }}>
      <Table>
        <ProblemHeader />
        <AnimatePresence>
          {sortedProblems.map((problem) => (
            <ProblemRow
              key={problem.questionName}
              problem={problem}
              toggleStar={toggleStar}
              onDelete={handleDelete}
            />
          ))}
        </AnimatePresence>
      </Table>
    </TableContainer>
  );
}

export default ProblemList;
