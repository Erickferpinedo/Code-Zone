import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./log_info.css";

const Log_Info = ({
  selectedFace,
  setSelectedFace,
  selectedQuestionType,
  setSelectedQuestionType,
  lastAttemptDate,
  setLastAttemptDate,
  nextReminderDate,
  setNextReminderDate,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const questionTypes = [
    "Array",
    "String",
    "Hash Table",
    "Dynamic Programming",
    "Math",
    "Sorting",
    "Greedy",
    "Depth-First Search",
    "Database",
    "Binary Search",
    "Matrix",
    "Tree",
    "Breadth-First Search",
    "Bit Manipulation",
    "Two Pointers",
    "Prefix Sum",
    "Heap (Priority Queue)",
    "Binary Tree",
    "Simulation",
    "Stack",
    "Counting",
    "Graph",
    "Sliding Window",
    "Design",
    "Backtracking",
    "Enumeration",
    "Union Find",
    "Linked List",
    "Ordered Set",
    "Number Theory",
    "Monotonic Stack",
    "Trie",
    "Segment Tree",
    "Bitmask",
    "Divide and Conquer",
    "Queue",
    "Recursion",
    "Combinatorics",
    "Binary Search Tree",
    "Hash Function",
    "Binary Indexed Tree",
    "Geometry",
    "Memoization",
    "String Matching",
  ];

  const handleSelectFace = (face) => {
    setSelectedFace(face);
  };

  const filteredQuestionTypes = questionTypes.filter((type) =>
    type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelectType = (type) => {
    setSelectedQuestionType(type);
    setIsDropdownOpen(false);
    setSearchQuery(""); // Clear search input after selection
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicking outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Focus the search input when dropdown is opened
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  return (
    <div className="log_info">
      {/* Difficulty Section */}
      <div className="difficulty-section">
        <div className="difficulty-title">Difficulty</div>
        <div className="face-icons">
          <div
            className={`face smiley ${
              selectedFace === "smile" ? "selected smiley-selected" : ""
            }`}
            onClick={() => handleSelectFace("smile")}
          >
            <div className="face-mouth"></div>
          </div>
          <div
            className={`face neutral ${
              selectedFace === "neutral" ? "selected neutral-selected" : ""
            }`}
            onClick={() => handleSelectFace("neutral")}
          >
            <div className="face-mouth"></div>
          </div>
          <div
            className={`face sad ${
              selectedFace === "sad" ? "selected sad-selected" : ""
            }`}
            onClick={() => handleSelectFace("sad")}
          >
            <div className="face-mouth"></div>
          </div>
        </div>
      </div>

      {/* Question Type Section */}
      <div className="data-structure-alg">
        <div className="data-structure-alg-title">Question Type</div>
        <div
          className="data-structure-drop-down"
          ref={dropdownRef}
        >
          <button onClick={toggleDropdown} className="dropdown-button">
            {selectedQuestionType || "Select Question Type"}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-container">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search question type..."
                className="search-input"
              />
              <ul className="dropdown-menu">
                {filteredQuestionTypes.length > 0 ? (
                  filteredQuestionTypes.map((type) => (
                    <li
                      key={type}
                      onClick={() => handleSelectType(type)}
                    >
                      {type}
                    </li>
                  ))
                ) : (
                  <li className="no-results">No matches found</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

 {/* Last Attempt Section */}
<div className="last-attempt-section">
  <div className="last-attempt-title">
    Last Attempt
    <span className="info-icon" title="Information about Last Attempt">
      ?
      <div className="tooltip">This is where information about the last attempt will go.</div>
    </span>
  </div>
  <div className="last-attempt-display">
    <DatePicker
      selected={lastAttemptDate}
      onChange={(date) => setLastAttemptDate(date)}
      dateFormat="MM/dd/yyyy h:mm aa"
      placeholderText="Select a date and time"
      showTimeSelect
      timeFormat="h:mm aa"
      timeIntervals={15}
      className="date-picker"
    />
  </div>
</div>


      {/* Next Reminder Section */}
      <div className="next-reminder-section">
        <div className="next-reminder-title">Next Reminder</div>
        <div className="next-reminder-display">
          <DatePicker
            selected={nextReminderDate}
            onChange={(date) => setNextReminderDate(date)}
            dateFormat="MM/dd/yyyy h:mm aa"
            placeholderText="Select a date and time"
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            className="date-picker"
          />
        </div>
      </div>
    </div>
  );
};

export default Log_Info;
