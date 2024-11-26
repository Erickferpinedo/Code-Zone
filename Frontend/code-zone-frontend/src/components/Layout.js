import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Log_prob_page from '../pages/Log_prob_page';
import Log_view_page from '../pages/Log_view_page';
import Setting_page from '../pages/Setting_Page';
//IF YOU WANT THE HEADER ON YOU PAGE IMPORT IT AND ADD IT TO THE ROUTES 
function Layout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

  
    const hideHeaderPaths = ['/', '/sign-up'];
    const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && <Header toggleSidebar={toggleSidebar} />}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <Routes>
                <Route path="/log-prob" element={<Log_prob_page />} />
                <Route path="/view-logs" element={<Log_view_page />} />
                <Route path="/settings" element={<Setting_page/>} />
            </Routes>
        </>
        //PAGES THAT NEED THE HEADER SHOULD BE ADDED HERE 
    );
}

export default Layout;
