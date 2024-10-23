import './App.css';
import {AboutUs} from "./Pages/AboutUs";
import {Home} from "./Pages/Home";
import {LogProblem} from "./Pages/LogProblem";
import {Notifications} from "./Pages/Notifications";
import {Settings} from "./Pages/Settings";
import {ViewLogs} from "./Pages/ViewLogs";
import React from 'react';
// import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/about-us" element = {<AboutUs/>}/>
                <Route path="/log-problem" element = {<LogProblem/>}/>
                <Route path="/notifications" element = {<Notifications/>}/>
                <Route path="/settings" element = {<Settings/>}/>
                <Route path="/view-logs" element = {<ViewLogs/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
