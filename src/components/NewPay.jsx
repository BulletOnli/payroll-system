import React from "react";
import {
    HStack,
    Input,
    Button,
    FormControl,
    FormLabel,
    Select,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context/Context";
import { nanoid } from "nanoid";

const NewPay = () => {
    const {
        employeeData,
        inputNewPay,
        setInputNewPay,
        updatePayroll,
        setEmployeePayroll,
    } = useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;

        const findEmployee = employeeData.find(
            (data) => data.name === inputNewPay.name
        );

        setInputNewPay((prevState) => {
            return {
                ...prevState,
                ...findEmployee,
                [name]: value,
                id: nanoid(),
            };
        });
    };

    const calculateEarnings = () => {
        let startDate = new Date(inputNewPay.startingDate);
        let endDate = new Date(inputNewPay.endingDate);
        let totalTime = endDate.getTime() - startDate.getTime();
        let totalDays = Math.floor(totalTime / (1000 * 3600 * 24));
        let totalPay = inputNewPay.rate * totalDays;

        setEmployeePayroll(() => ({
            ...inputNewPay,
            totalDays: totalDays,
            totalPay: totalPay,
        }));
    };

    return (
        <FormControl>
            <FormLabel>Employee:</FormLabel>
            <Select name="name" onChange={handleChange} mb={3}>
                <option value="">-- Choose an Employee --</option>
                {employeeData &&
                    employeeData.map((data) => (
                        <option key={data.id} value={data.name}>
                            {data.name}
                        </option>
                    ))}
            </Select>
            <FormLabel>Pay Date:</FormLabel>
            <Input mb={5} name="payDate" type="date" onChange={handleChange} />
            <FormLabel>Starting Date:</FormLabel>
            <Input
                mb={5}
                name="startingDate"
                type="date"
                onChange={handleChange}
            />
            <FormLabel>Ending Date:</FormLabel>
            <Input
                mb={5}
                name="endingDate"
                type="date"
                onChange={handleChange}
            />

            <Button
                leftIcon={<RepeatIcon />}
                colorScheme="red"
                mt={3}
                onClick={() => {
                    calculateEarnings();
                    updatePayroll();
                }}
            >
                Calculate
            </Button>
        </FormControl>
    );
};

export default NewPay;
