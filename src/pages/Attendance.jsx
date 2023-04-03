import {
    Flex,
    Heading,
    Grid,
    GridItem,
    VStack,
    Spacer,
    HStack,
    Button,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
    Stack,
    Select,
    Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import AttendanceTable from "../components/AttendanceTable";
import InputAttendance from "../components/InputAttendance";
import { useGlobalContext } from "../context/Context";

const Attendance = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        dispatch,
        clearAttendance,
        attendanceData,
        employeeData,
        duplicateAttendanceData,
        setDuplicateAttendanceData,
    } = useGlobalContext();
    const selectRef = useRef(null);

    useEffect(() => {
        fetch("https://bullet-json-data.onrender.com/attendanceLogs")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "FETCH_ATTENDANCE_DATA", payload: data });
                setDuplicateAttendanceData([]);
            });
    }, []);

    const filter = () => {
        const selectedName = selectRef.current.value;
        if (selectedName === "") {
            setDuplicateAttendanceData([]);
        } else {
            const filteredData = attendanceData.filter(
                (attendance) => attendance.name === selectedName
            );
            setDuplicateAttendanceData(filteredData);
        }
    };

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
                    <Flex align="center" py="14px" px="1rem" bg="#F5F5F5">
                        <Heading fontSize="xl">Attendance</Heading>
                    </Flex>
                    <Grid
                        gridTemplateColumns="repeat(2, 1fr)"
                        gap={5}
                        h="100%"
                        p="1.5rem"
                    >
                        <GridItem>
                            <Flex h="100%" direction="column">
                                <HStack
                                    p="10px"
                                    rounded="md"
                                    mb={2}
                                    bg="#F5F5F5"
                                    boxShadow="base"
                                >
                                    <HStack>
                                        <Text fontWeight="bold">Filter:</Text>
                                        <Select
                                            ref={selectRef}
                                            placeholder="All"
                                            size="sm"
                                        >
                                            {attendanceData &&
                                                Array.from(
                                                    new Set(
                                                        attendanceData.map(
                                                            (data) => data.name
                                                        )
                                                    )
                                                ).map((name) => (
                                                    <option
                                                        key={name}
                                                        value={name}
                                                    >
                                                        {name}
                                                    </option>
                                                ))}
                                        </Select>
                                        <Button
                                            colorScheme="blue"
                                            size="sm"
                                            onClick={() => {
                                                filter();
                                            }}
                                        >
                                            Run
                                        </Button>
                                    </HStack>
                                    <Spacer />
                                    <Button
                                        colorScheme="red"
                                        size="sm"
                                        onClick={onOpen}
                                    >
                                        Clear logs
                                    </Button>
                                </HStack>
                                <AttendanceTable />
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <Stack spacing={3}>
                                <Box
                                    w="100%"
                                    bg="#F5F5F5"
                                    p="20px"
                                    boxShadow="base"
                                    rounded="md"
                                >
                                    <InputAttendance />
                                </Box>
                                <Box
                                    w="100%"
                                    bg="#F5F5F5"
                                    p="15px"
                                    boxShadow="base"
                                    rounded="md"
                                >
                                    <Heading
                                        as="h2"
                                        size="md"
                                        textAlign="center"
                                    >
                                        Attendance
                                    </Heading>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>
            //* Warning MOdal */
            <Modal isOpen={isOpen} onClose={onClose} isCentered="true">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody textAlign="center" m="1rem">
                        <DeleteIcon boxSize={10} color="red" my="1rem" />
                        <Heading size="lg">
                            Are you sure to Clear all the attendance?
                        </Heading>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="gray" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => {
                                clearAttendance();
                                setDuplicateAttendanceData([]);
                                onClose();
                            }}
                        >
                            Yes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Attendance;
