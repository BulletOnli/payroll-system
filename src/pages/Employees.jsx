import React, { useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Button,
    Spacer,
    Input,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context/Context";
import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeTable";
import NewEmployeeModal from "../components/NewEmployeeModal";

const Employees = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { dispatch } = useGlobalContext();

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                dispatch({ type: "FETCH_EMPLOYEE_DATA", payload: data })
            );
    }, []);

    return (
        <>
            <Flex>
                <Sidebar />
                <Flex
                    as="main"
                    flexDirection="column"
                    width="100%"
                    bg="#c7ccdb"
                >
                    <Flex alignItems="center" py="10px" px="1rem" bg="#F5F5F5">
                        <Heading fontSize="xl">Employees</Heading>
                        <Spacer />
                        <HStack spacing="10px">
                            <Input
                                placeholder="Search..."
                                size="sm"
                                w="12rem"
                            />
                            <Button
                                colorScheme="teal"
                                size="sm"
                                onClick={onOpen}
                            >
                                New Employee
                            </Button>
                        </HStack>
                    </Flex>
                    <Box h="100%" p="1.5rem">
                        <EmployeeTable />
                    </Box>
                </Flex>
            </Flex>

            {/* New employee modal */}
            <NewEmployeeModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Employees;
