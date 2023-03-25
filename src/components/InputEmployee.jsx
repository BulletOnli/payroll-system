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
import { useGlobalContext } from "../Context";
import { nanoid } from "nanoid";

const InputEmployee = ({ isOpen, onClose }) => {
    const { inputValue, setInputValue, dispatch } = useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            id: nanoid(),
            [name]: value,
        }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Employee</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="name"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Position</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="position"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Rate per hour</FormLabel>
                        <Input
                            type="number"
                            mb={3}
                            name="rate"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Address</FormLabel>
                        <Input
                            type="text"
                            mb={3}
                            name="address"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            mb={3}
                            name="email"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            onClose();
                            dispatch({
                                type: "NEW_EMPLOYEE",
                                payload: inputValue,
                            });
                        }}
                        colorScheme="blue"
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default InputEmployee;
