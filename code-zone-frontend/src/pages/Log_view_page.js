import React, { useEffect, useState } from "react";
import ProblemList from "../components/ProblemList/problemList.js"; // ProblemList component
import { getAttempts, deleteAttempt } from "../apiServices/attemptService.js"; // API functions

function Log_view_page() {
  const [attempts, setAttempts] = useState([]); // State for attempts
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const fetchedAttempts = await getAttempts(); // Fetch data from API
        // Filter out invalid or empty attempts
        const validAttempts = fetchedAttempts.filter(
          (attempt) =>
            attempt && attempt.questionName && attempt.questionName.trim() !== ""
        );
        setAttempts(validAttempts); // Set only valid attempts in state
      } catch (err) {
        console.error("Error fetching attempts:", err);
        setError("Failed to load attempts. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAttempts();
  }, []);

  const handleDelete = async (problem) => {
    try {
      await deleteAttempt(problem.questionName); // Call backend API to delete
      setAttempts((prevAttempts) =>
        prevAttempts.filter((a) => a.questionName !== problem.questionName)
      ); // Remove deleted item from state
    } catch (err) {
      console.error("Error deleting attempt:", err);
      setError("Failed to delete the attempt. Please try again.");
    }
  };

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>{error}</div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px", color: "#5c93ad" }}>Problem Log</h1>
      {attempts.length > 0 ? (
        <ProblemList problems={attempts} onDelete={handleDelete} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          No attempts to display.
        </div>
      )}
    </div>
  );
}

export default Log_view_page;
