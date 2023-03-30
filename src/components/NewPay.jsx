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
    const { employeeData } = useGlobalContext();

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setInputAttendance((prevState) => ({
        //     ...prevState,
        //     [name]: value,
        //     id: nanoid(),
        // }));
        console.log(e);
    };

    return (
        <FormControl>
            <FormLabel>Employee:</FormLabel>
            <Select value="" name="employee" onChange={handleChange} mb={3}>
                <option value="">-- Choose an Employee --</option>
                {employeeData &&
                    employeeData.map((data) => (
                        <option key={data.id} value={data.name}>
                            {data.name}
                        </option>
                    ))}
            </Select>
            <FormLabel>Pay Date:</FormLabel>
            <Input
                value=""
                mb={5}
                name="pay-date"
                type="date"
                onChange={handleChange}
            />
            <FormLabel>Starting Date:</FormLabel>
            <Input
                value=""
                mb={5}
                name="starting-date"
                type="date"
                onChange={handleChange}
            />
            <FormLabel>Ending Date:</FormLabel>
            <Input
                value=""
                mb={5}
                name="ending-date"
                type="date"
                onChange={handleChange}
            />

            <Button leftIcon={<RepeatIcon />} colorScheme="red" mt={3}>
                Calculate
            </Button>
        </FormControl>
    );
};

export default NewPay;
