// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log_prob_page from './pages/Log_prob_page';
import Sign_in_page from './pages/Sign_in_page';
import Log_view_page from './pages/Log_view_page';
import Sign_up_page from './pages/Sign_up_page.js';
import Layout from './components/Layout'; 
import Setting_page from './pages/Setting_Page.js';
import Notification_page from './pages/Notification_page.js'
import Main_page from './pages/Main_page.js';
 
function App() {
    return (
        <Router>
            <Routes>
                {/* Define the routes here! */}
                <Route path='/' element={<Main_page />} />
                <Route path="/signin" element={<Sign_in_page />} />
                <Route path="/*" element={<Layout />} />
                
            </Routes>
        </Router>
    );
}

export default App;
