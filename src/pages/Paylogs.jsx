import React, { useEffect } from "react";
import {
    Flex,
    Heading,
    Grid,
    GridItem,
    VStack,
    Box,
    Spacer,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context/Context";
import PayrollTable from "../components/PayrollTable";

const Paylogs = () => {
    const { payrollData, dispatch } = useGlobalContext();

    useEffect(() => {
        fetch("http://localhost:3000/payroll")
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: "FETCH_PAYROLL_DATA", payload: data })
            );
    }, []);

    return (
        <Flex>
            <Sidebar />
            <Flex as="main" flexDirection="column" width="100%" bg="#c7ccdb">
                <Flex align="center" py="14px" px="1rem" bg="#F5F5F5">
                    <Heading fontSize="xl">Payroll Logs</Heading>
                </Flex>
                <Box p="1.5rem" h="100%">
                    <PayrollTable />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Paylogs;
