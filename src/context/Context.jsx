import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer";

const Context = React.createContext();

const initialState = {
    employeeData: [],
    attendanceData: [],
    payrollData: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputEmployeeValue, setInputEmployeeValue] = useState({});
    const [inputAttendance, setInputAttendance] = useState({
        name: "",
        id: "",
        date: "",
        timeIn: "",
        timeOut: "",
    });
    const [inputNewPay, setInputNewPay] = useState({});
    const [employeePayroll, setEmployeePayroll] = useState({});
    const [duplicateAttendanceData, setDuplicateAttendanceData] = useState([]);

    // find the exact data and set it to input value
    const editEmployeeData = (id) => {
        const thisData = state.employeeData.find((data) => data.id === id);
        setInputEmployeeValue(thisData);
    };

    const fetchEmployeeData = () => {
        fetch(`https://payroll-jsondata.onrender.com/employees`)
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                dispatch({ type: "FETCH_EMPLOYEE_DATA", payload: data })
            );
    };

    const addNewEmployee = () => {
        fetch("https://payroll-jsondata.onrender.com/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputEmployeeValue),
        }).then(() => {
            dispatch({
                type: "ADD_EMPLOYEE",
                payload: inputEmployeeValue,
            });
        });
    };

    const updateEmployeeData = (id) => {
        fetch(`https://payroll-jsondata.onrender.com/employees/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputEmployeeValue),
        })
            .then((res) => {
                return res.json();
            })
            .then(() => {
                fetchEmployeeData();
            });
    };

    const removeEmployee = (id) => {
        fetch(`https://payroll-jsondata.onrender.com/employees/${id}`, {
            method: "DELETE",
        }).then(() => {
            dispatch({
                type: "REMOVE_EMPLOYEE",
                payload: id,
            });
        });
    };

    // * functions for Attendance log

    const addAttendance = () => {
        fetch("https://payroll-jsondata.onrender.com/attendanceLogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputAttendance),
        }).then(() => {
            dispatch({
                type: "ADD_ATTENDANCE",
                payload: inputAttendance,
            });
        });
    };

    const clearAttendance = () => {
        const allEmployeeId = state.attendanceData.map((data) => data.id);

        allEmployeeId.forEach((id) => {
            fetch(
                `https://payroll-jsondata.onrender.com/attendanceLogs/${id}`,
                {
                    method: "DELETE",
                }
            ).then(() => {
                dispatch({
                    type: "CLEAR_ATTENDANCE",
                    payload: id,
                });
            });
        });
    };

    //* functions for PAYROLL
    const updatePayroll = () => {
        setEmployeePayroll(inputNewPay);
        fetch("https://payroll-jsondata.onrender.com/payroll", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputNewPay),
        }).then(() => {
            dispatch({
                type: "UPDATE_PAYROLL",
                payload: inputNewPay,
            });
        });
    };

    const removePayroll = (id) => {
        fetch(`https://payroll-jsondata.onrender.com/payroll/${id}`, {
            method: "DELETE",
        }).then(() => {
            dispatch({ type: "REMOVE_PAYROLL", payload: id });
        });
    };

    return (
        <Context.Provider
            value={{
                ...state,
                dispatch,
                inputEmployeeValue,
                setInputEmployeeValue,
                fetchEmployeeData,
                editEmployeeData,
                addNewEmployee,
                removeEmployee,
                inputAttendance,
                setInputAttendance,
                addAttendance,
                clearAttendance,
                updateEmployeeData,
                updatePayroll,
                inputNewPay,
                setInputNewPay,
                employeePayroll,
                setEmployeePayroll,
                removePayroll,
                duplicateAttendanceData,
                setDuplicateAttendanceData,
            }}
        >
            {children}
        </Context.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(Context);
};

export { Context, AppProvider, useGlobalContext };
