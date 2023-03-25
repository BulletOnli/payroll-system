import { Flex, Heading, Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import AttendanceTable from "../components/AttendanceTable";
import InputAttendance from "./InputAttendance";

const Attendance = () => {
    return (
        <Flex>
            <Sidebar />
            <Flex as="main" flexDirection="column" width="100%" bg="#c7ccdb">
                <Flex alignItems="center" py="14px" px="1rem" bg="#F5F5F5">
                    <Heading fontSize="xl">Attendance</Heading>
                </Flex>
                <Grid
                    gridTemplateColumns="repeat(2, 1fr)"
                    gap={5}
                    h="100%"
                    p="1.5rem"
                >
                    <GridItem>
                        <AttendanceTable />
                    </GridItem>
                    <VStack spacing={5}>
                        <GridItem w="100%" bg="#F5F5F5" p="20px">
                            <InputAttendance />
                        </GridItem>
                        <GridItem w="100%" h="100%" bg="#F5F5F5" p="20px">
                            <InputAttendance />
                        </GridItem>
                    </VStack>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Attendance;
