import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Employees />} />
                <Route path="/attendance" element={<Attendance />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
