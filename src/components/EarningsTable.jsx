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
import { useGlobalContext } from "../context/Context";

const EarningsTable = () => {
    const { employeePayroll } = useGlobalContext();

    return (
        <TableContainer h="100%">
            <Table variant="striped" colorScheme="gray">
                <TableCaption fontSize="md" fontWeight="bold">
                    Ordinary Hours Worked
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Rate</Th>
                        <Th>Total Days</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{employeePayroll.rate}</Td>
                        <Td>{employeePayroll.totalDays}</Td>
                        <Td>{employeePayroll.totalPay}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default EarningsTable;
