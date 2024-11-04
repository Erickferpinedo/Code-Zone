import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Log_prob_page from '../pages/Log_prob_page';
import Log_view_page from '../pages/Log_view_page';

function Layout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Define paths where the Header should be hidden
    const hideHeaderPaths = ['/', '/sign-up'];
    const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && <Header toggleSidebar={toggleSidebar} />}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <Routes>
                <Route path="/log-prob" element={<Log_prob_page />} />
                <Route path="/view-logs" element={<Log_view_page />} />
                {/* ADD HERE FOR PAGE TO HAVE HEADER*/}
            </Routes>
        </>
    );
}

export default Layout;
