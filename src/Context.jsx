import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";
import { nanoid } from "nanoid";

const Context = React.createContext();

const initialState = {
    employeeData: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState({});

    const fetchEmployeeData = async () => {
        const reponse = await fetch("http://localhost:3000/employees");
        const data = await reponse.json();

        dispatch({ type: "FETCH_EMPLOYEE_DATA", payload: data });
    };

    return (
        <Context.Provider
            value={{
                ...state,
                dispatch,
                fetchEmployeeData,
                inputValue,
                setInputValue,
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
