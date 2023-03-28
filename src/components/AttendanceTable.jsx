import React from "react";
import {
    TableContainer,
    Table,
    Thead,
    Th,
    Tbody,
    Tr,
    Td,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context/Context";

const AttendanceTable = () => {
    const { attendanceData } = useGlobalContext();

    return (
        <TableContainer
            w="100%"
            h="100%"
            bg="#F5F5F5"
            boxShadow="base"
            rounded="md"
        >
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Name</Th>
                        <Th>Time-In</Th>
                        <Th>Time-Out</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {attendanceData &&
                        attendanceData.map((data) => (
                            <Tr key={data.id}>
                                <Td>{data.date}</Td>
                                <Td>{data.employee}</Td>
                                <Td>{data.timeIn}</Td>
                                <Td>{data.timeOut}</Td>
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default AttendanceTable;
