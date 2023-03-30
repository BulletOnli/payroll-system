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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AttendanceTable from "../components/AttendanceTable";
import InputAttendance from "../components/InputAttendance";
import { useGlobalContext } from "../context/Context";

const Attendance = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { dispatch, clearAttendance } = useGlobalContext();

    useEffect(() => {
        fetch("http://localhost:3000/attendanceLogs")
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: "FETCH_ATTENDANCE_DATA", payload: data })
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
                    <Flex
                        h="3.5rem"
                        align="center"
                        py="14px"
                        px="1rem"
                        bg="#F5F5F5"
                    >
                        {/* <Heading fontSize="xl">Attendance</Heading> */}
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
                                    p="5px"
                                    rounded="md"
                                    mb={2}
                                    bg="#F5F5F5"
                                    boxShadow="base"
                                >
                                    <Heading as="h3" size="md" mx="5px">
                                        Attendance Log
                                    </Heading>
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
                        <VStack spacing={5}>
                            <GridItem
                                w="100%"
                                bg="#F5F5F5"
                                p="20px"
                                boxShadow="base"
                                rounded="md"
                            >
                                <InputAttendance />
                            </GridItem>

                            <GridItem
                                w="100%"
                                bg="#F5F5F5"
                                p="20px"
                                boxShadow="base"
                                rounded="md"
                            >
                                dsff
                            </GridItem>
                        </VStack>
                    </Grid>
                </Flex>
            </Flex>

            {/* Warning MOdal */}
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
