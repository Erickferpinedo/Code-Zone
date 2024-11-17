import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Log_prob_page from "../pages/Log_prob_page";
import Log_view_page from "../pages/Log_view_page";
import Setting_page from "../pages/Setting_Page";
import { getUserData } from "../apiServices/userService";

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
        const data = await getUserData();
        setUserIcon(data.profileImage);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
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
        <Route path="/log-prob" element={<Log_prob_page />} />
        <Route path="/view-logs" element={<Log_view_page />} />
        <Route path="/settings" element={<Setting_page />} />
      </Routes>
    </>
  );
}

export default Layout;
