import {
    Box,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Button,
    Icon,
    VStack,
    Avatar,
    Text,
    HStack,
    Spacer,
} from "@chakra-ui/react";
import {
    CalendarIcon,
    WarningIcon,
    TimeIcon,
    AttachmentIcon,
} from "@chakra-ui/icons";
import React from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = () => {
    return (
        <Flex
            flexDirection="column"
            width="20rem"
            height="100vh"
            p="20px"
            pb="5px"
            bg="#F5F5F5"
        >
            <Heading as="h1" fontSize="3xl" textAlign="center">
                Payroll System
            </Heading>
            <List spacing="5px" mt="3rem" fontSize="lg">
                <ListItem>
                    <NavLink
                        to="/"
                        className="flex items-center hover:bg-[#C7CCDB] px-8 py-3 rounded-[2rem]"
                    >
                        <i className="fa-solid fa-user mr-2 "></i>
                        Employees
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to="/attendance"
                        className="flex items-center hover:bg-[#C7CCDB] px-8 py-3 rounded-[2rem]"
                    >
                        <ListIcon as={CalendarIcon} />
                        Attendance
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to="/payroll"
                        className="flex items-center hover:bg-[#C7CCDB] px-8 py-3 rounded-[2rem]"
                    >
                        <ListIcon as={FaMoneyCheck} />
                        Payroll
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to="/paylogs"
                        className="flex items-center hover:bg-[#C7CCDB] px-8 py-3 rounded-[2rem]"
                    >
                        <ListIcon as={BsBook} />
                        Payroll Logs
                    </NavLink>
                </ListItem>
            </List>
            <Spacer />
            <Flex flexDirection="column">
                <HStack mb="15px">
                    <Avatar size="sm" name="Gemmuel" />
                    <Text fontWeight="semibold">Gemmuel</Text>
                </HStack>
                <Button colorScheme="red" size="md" w="100%">
                    <Icon as={WarningIcon} mr="5px" />
                    Log out
                </Button>
                <Footer />
            </Flex>
        </Flex>
    );
};

export default Sidebar;
