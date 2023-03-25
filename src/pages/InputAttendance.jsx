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

const InputAttendance = () => {
    return (
        <FormControl>
            <FormLabel>Employee</FormLabel>
            <Select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <FormLabel>Date</FormLabel>
            <Input placeholder="Select Date and Time" size="md" type="date" />
            <FormLabel>Time</FormLabel>
            <Input type="time" placeholder="Current Time" />
            <HStack mt="1.5rem" justify="center">
                <Button leftIcon={<FiClock />} colorScheme="blue">
                    Time-In
                </Button>
                <Button leftIcon={<MdLockClock />} colorScheme="red">
                    Time-out
                </Button>
            </HStack>
        </FormControl>
    );
};

export default InputAttendance;
