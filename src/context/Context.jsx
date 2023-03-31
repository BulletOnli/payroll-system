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
    const [inputAttendance, setInputAttendance] = useState({});
    const [inputNewPay, setInputNewPay] = useState({});
    const [employeePayroll, setEmployeePayroll] = useState({});

    // find the exact data and set it to input value
    const editEmployeeData = (id) => {
        const thisData = state.employeeData.find((data) => data.id === id);
        setInputEmployeeValue(thisData);
    };

    const fetchEmployeeData = () => {
        fetch(`http://localhost:3000/employees`)
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                dispatch({ type: "FETCH_EMPLOYEE_DATA", payload: data })
            );
    };

    const addNewEmployee = () => {
        fetch("http://localhost:3000/employees", {
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
        fetch(`http://localhost:3000/employees/${id}`, {
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
        fetch(`http://localhost:3000/employees/${id}`, {
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
        fetch("http://localhost:3000/attendanceLogs", {
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
            fetch(`http://localhost:3000/attendanceLogs/${id}`, {
                method: "DELETE",
            }).then(() => {
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
        fetch("http://localhost:3000/payroll", {
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
