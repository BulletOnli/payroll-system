import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box mt={2}>
            <Text fontSize="xs">
                2023 Payroll System - Developed by{" "}
                <a
                    className="hover:underline"
                    href="https://ayo.so/bulletonli"
                    target="_blank"
                >
                    Bullet
                </a>
            </Text>
        </Box>
    );
};

export default Footer;
