import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer";

const Context = React.createContext();

const initialState = {
    employeeData: [],
    attendanceData: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputEmployeeValue, setInputEmployeeValue] = useState({});
    const [inputAttendance, setInputAttendance] = useState({
        employee: "",
        id: "",
        date: "",
        timeIn: "",
        timeOut: "",
    });

    // find the exact data and set it to input value
    const editEmployeeData = (id) => {
        const thisData = state.employeeData.find((data) => data.id === id);

        setInputEmployeeValue(thisData);
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

    const removeEmployee = (id) => {
        fetch("http://localhost:3000/employees/" + id, {
            method: "DELETE",
        }).then(() => {
            dispatch({
                type: "REMOVE_EMPLOYEE",
                payload: id,
            });
        });
    };

    const saveEditedData = () => {
        removeEmployee(inputEmployeeValue.id);
        addNewEmployee();
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
            fetch("http://localhost:3000/attendanceLogs/" + id, {
                method: "DELETE",
            }).then(() => {
                dispatch({
                    type: "CLEAR_ATTENDANCE",
                    payload: id,
                });
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
                editEmployeeData,
                addNewEmployee,
                saveEditedData,
                removeEmployee,
                inputAttendance,
                setInputAttendance,
                addAttendance,
                clearAttendance,
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
