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
    useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context/Context";
import EditEmployeeModal from "./EditEmployeeModal";
import { nanoid } from "nanoid";

const EmployeeTable = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        employeeData,
        dispatch,
        editEmployeeData,
        inputValue,
        removeEmployee,
    } = useGlobalContext();

    return (
        <>
            <TableContainer
                h="100%"
                bg="whiteAlpha.800"
                boxShadow="base"
                rounded="md"
            >
                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Position</Th>
                            <Th>Hourly Rate</Th>
                            <Th>Address</Th>
                            <Th>Email</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {employeeData &&
                            employeeData.map((data) => (
                                <Tr key={nanoid()}>
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
                                                onClick={() => {
                                                    onOpen();
                                                    editEmployeeData(data.id);
                                                }}
                                            />
                                            <Icon
                                                as={DeleteIcon}
                                                cursor="pointer"
                                                onClick={() =>
                                                    removeEmployee(data.id)
                                                }
                                            />
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <EditEmployeeModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default EmployeeTable;
