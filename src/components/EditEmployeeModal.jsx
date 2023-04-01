import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context/Context";

const EditEmployeeModal = ({ isOpen, onClose }) => {
    const { inputEmployeeValue, setInputEmployeeValue, updateEmployeeData } =
        useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputEmployeeValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Employee</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="name"
                            value={inputEmployeeValue.name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Position</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="position"
                            value={inputEmployeeValue.position}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Rate per Day</FormLabel>
                        <Input
                            type="number"
                            mb={3}
                            name="rate"
                            value={inputEmployeeValue.rate}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Address</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="address"
                            value={inputEmployeeValue.address}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            mb={3}
                            name="email"
                            value={inputEmployeeValue.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="gray"
                        mr={3}
                        onClick={() => {
                            onClose();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            // saveEditedData();
                            updateEmployeeData(inputEmployeeValue.id);
                            onClose();
                        }}
                        colorScheme="blue"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditEmployeeModal;
