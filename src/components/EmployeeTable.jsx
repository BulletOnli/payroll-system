import React, { useEffect } from "react";
import {
    TableContainer,
    Table,
    Thead,
    Th,
    Tbody,
    Tr,
    Td,
    HStack,
    Icon,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../Context";

const EmployeeTable = () => {
    const { employeeData, dispatch } = useGlobalContext();

    return (
        <TableContainer h="100%" bg="whiteAlpha.800">
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Position</Th>
                        <Th>Rate by</Th>
                        <Th>Address</Th>
                        <Th>Email</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {employeeData &&
                        employeeData.map((data) => (
                            <Tr key={data.id}>
                                <Td>{data.name}</Td>
                                <Td>{data.position}</Td>
                                <Td>{data.rate}</Td>
                                <Td>{data.address}</Td>
                                <Td>{data.email}</Td>
                                <Td>
                                    <HStack>
                                        <Icon
                                            as={EditIcon}
                                            cursor="pointer"
                                            onClick={() => console.log("edit")}
                                        />
                                        <Icon
                                            as={DeleteIcon}
                                            cursor="pointer"
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_EMPLOYEE",
                                                    payload: data.id,
                                                })
                                            }
                                        />
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeTable;
