import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Paylogs from "./pages/Paylogs";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Employees />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/paylogs" element={<Paylogs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
