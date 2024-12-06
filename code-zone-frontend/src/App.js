/* eslint-disable react/jsx-pascal-case */
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up_page from "./pages/Sign_up_page.js";
import Layout from "./components/Layout.js";
import Main_page from "./pages/Main_page.js";
import Sign_in_page from "./pages/Sign_in_page.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here! */}
        <Route path="/signin" element={<Sign_in_page />} />
        <Route path="/" element={<Main_page />} />
        <Route path="/sign-up" element={<Sign_up_page />} />

        {/* Wrap other routes inside the Layout component */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
