import React from "react";
import {
    HStack,
    Input,
    Button,
    FormControl,
    FormLabel,
    Select,
} from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { MdLockClock } from "react-icons/md";
import { useGlobalContext } from "../context/Context";
import { nanoid } from "nanoid";

const InputAttendance = () => {
    const { employeeData, inputAttendance, setInputAttendance, addAttendance } =
        useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputAttendance((prevState) => ({
            ...prevState,
            [name]: value,
            id: nanoid(),
        }));
    };

    const resetInput = () => {
        setInputAttendance({
            employee: "",
            id: "",
            date: "",
            timeIn: "",
            timeOut: "",
        });
    };

    return (
        <FormControl>
            <FormLabel>Employee</FormLabel>
            <Select
                value={inputAttendance.employee}
                name="name"
                onChange={handleChange}
                mb={3}
            >
                <option value="">-- Choose an Employee --</option>
                {employeeData &&
                    employeeData.map((data) => (
                        <option key={data.id} value={data.name}>
                            {data.name}
                        </option>
                    ))}
            </Select>
            <FormLabel>Date</FormLabel>
            <Input
                value={inputAttendance.date}
                mb={3}
                name="date"
                placeholder="Select Date and Time"
                type="date"
                onChange={handleChange}
            />
            <FormLabel>Time-In</FormLabel>
            <Input
                value={inputAttendance.timeIn}
                isDisabled={inputAttendance.timeOut}
                mb={3}
                name="timeIn"
                type="time"
                placeholder="Current Time"
                onChange={handleChange}
            />
            <FormLabel>Time-Out</FormLabel>
            <Input
                value={inputAttendance.timeOut}
                isDisabled={inputAttendance.timeIn}
                mb={3}
                name="timeOut"
                type="time"
                placeholder="Current Time"
                onChange={handleChange}
            />

            <HStack mt="1rem" justify="center">
                <Button
                    isDisabled={!inputAttendance.timeIn}
                    leftIcon={<FiClock />}
                    colorScheme="blue"
                    onClick={() => {
                        addAttendance();
                        resetInput();
                    }}
                >
                    Time-In
                </Button>
                <Button
                    isDisabled={!inputAttendance.timeOut}
                    leftIcon={<MdLockClock />}
                    colorScheme="red"
                    onClick={() => {
                        addAttendance();
                        resetInput();
                    }}
                >
                    Time-out
                </Button>
            </HStack>
        </FormControl>
    );
};

export default InputAttendance;
