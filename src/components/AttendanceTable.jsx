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

const AttendanceTable = () => {
    return (
        <TableContainer h="100%" bg="#F5F5F5">
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
                    <Tr>
                        <Td>3/24/23</Td>
                        <Td>Bullet</Td>
                        <Td>12:01 PM</Td>
                        <Td>6:00 PM</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default AttendanceTable;
