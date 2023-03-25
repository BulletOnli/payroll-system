import { nanoid } from "nanoid";

const reducer = (state, action) => {
    if (action.type === "FETCH_EMPLOYEE_DATA") {
        return {
            ...state,
            employeeData: action.payload,
        };
    }
    if (action.type === "NEW_EMPLOYEE") {
        const newData = action.payload;

        return {
            ...state,
            employeeData: [...state.employeeData, newData],
        };
    }
    if (action.type === "REMOVE_EMPLOYEE") {
        const newData = state.employeeData.filter(
            (data) => data.id !== action.payload
        );

        return {
            ...state,
            employeeData: newData,
        };
    }
};

export default reducer;
