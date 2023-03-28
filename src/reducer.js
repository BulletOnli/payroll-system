const reducer = (state, action) => {
    //* FOR EMPLOYEES DATA
    if (action.type === "FETCH_EMPLOYEE_DATA") {
        return {
            ...state,
            employeeData: action.payload,
        };
    }
    if (action.type === "ADD_EMPLOYEE") {
        return {
            ...state,
            employeeData: [action.payload, ...state.employeeData],
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

    //* FOR ATTENDANCE DATA

    if (action.type === "FETCH_ATTENDANCE_DATA") {
        return {
            ...state,
            attendanceData: action.payload,
        };
    }
    if (action.type === "ADD_ATTENDANCE") {
        return {
            ...state,
            attendanceData: [action.payload, ...state.attendanceData],
        };
    }
    if (action.type === "CLEAR_ATTENDANCE") {
        return {
            ...state,
            attendanceData: [],
        };
    }
};

export default reducer;
