/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar-components/Sidebar.js";
import LOG_PROB_PAGE from "../pages/Log_prob_page.js";
import Log_view_page from "../pages/Log_view_page.js";
import Setting_page from "../pages/Setting_Page.js";
import { Home } from "../pages/Home.js";
import NotificationPage from "../pages/Notification_page.js";
import { getUserData } from "../apiServices/userService.js";
import Sign_up_page from "../pages/Sign_up_page.js";
import AboutUs from "../pages/AboutUs.js"; // Import the About Us page

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userIconUrl, setUserIcon] = useState(null); // store the user icon url
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(); // call the backend API
        setUserIcon(data.profileImage); // sets it for use state
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData(); // trigger the function
  }, []);

  // Define paths where the Header should be hidden
  const hideHeaderPaths = ["/", "/sign-up"];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && (
        <Header toggleSidebar={toggleSidebar} userIconUrl={userIconUrl} />
      )}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/log-prob" element={<LOG_PROB_PAGE />} />
        <Route path="/view-logs" element={<Log_view_page />} />
        <Route path="/settings" element={<Setting_page />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/sign-up" element={<Sign_up_page />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add the About Us route */}
      </Routes>
    </>
  );
}

export default Layout;
