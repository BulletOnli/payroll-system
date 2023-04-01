import React, { useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    TableContainer,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context/Context";
import { nanoid } from "nanoid";

const PayrollTable = () => {
    const { payrollData, removePayroll, setEmployeePayroll } =
        useGlobalContext();

    useEffect(() => {
        setEmployeePayroll({});
    }, []);

    return (
        <TableContainer
            h="100%"
            bg="#F5F5F5"
            p="10px"
            boxShadow="base"
            rounded="md"
        >
            <Table>
                <Thead>
                    <Tr>
                        <Th>Payment Date</Th>
                        <Th>Employee</Th>
                        <Th>Starting Date</Th>
                        <Th>Ending Date</Th>
                        <Th>Total Days</Th>
                        <Th>Gross Pay</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {payrollData &&
                        payrollData.map((data) => (
                            <Tr key={nanoid()}>
                                <Td>{data.payDate}</Td>
                                <Td>{data.name}</Td>
                                <Td>{data.startingDate}</Td>
                                <Td>{data.endingDate}</Td>
                                <Td>{data.totalDays}</Td>
                                <Td>{data.totalPay}</Td>
                                <Td>
                                    <Button
                                        colorScheme="red"
                                        size="xs"
                                        onClick={() => removePayroll(data.id)}
                                    >
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default PayrollTable;
