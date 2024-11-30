/* eslint-disable react/jsx-pascal-case */
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_in_page from "./pages/Sign_in_page.js";
import Sign_up_page from "./pages/sign_up_page.js";
import Layout from "./components/Layout.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here! */}
        <Route path="/" element={<Sign_in_page />} />
        <Route path="/sign-up" element={<Sign_up_page />} />

        {/* Wrap other routes inside the Layout component */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
