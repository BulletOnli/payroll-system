import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";

const EarningsTable = () => {
    return (
        <TableContainer h="100%">
            <Table variant="striped" colorScheme="gray">
                <TableCaption fontSize="md" fontWeight="bold">
                    Ordinary Hours Worked
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Unit</Th>
                        <Th>Rate</Th>
                        <Th isNumeric>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>33.6</Td>
                        <Td>500</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default EarningsTable;
