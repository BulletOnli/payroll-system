import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import PayrollLogs from "./pages/PayrollLogs";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Employees />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/payrolllogs" element={<PayrollLogs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
