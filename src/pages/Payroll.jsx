import React, { useEffect } from "react";
import {
    Flex,
    Heading,
    Grid,
    GridItem,
    VStack,
    Box,
    Spacer,
    Stack,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NewPay from "../components/NewPay";
import EarningsTable from "../components/EarningsTable";
import { useGlobalContext } from "../context/Context";
import PayrollTable from "../components/PayrollTable";

const Payroll = () => {
    const { payrollData, dispatch } = useGlobalContext();

    useEffect(() => {
        fetch("https://payroll-jsondata.onrender.com/payroll")
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: "FETCH_PAYROLL_DATA", payload: data })
            );
    }, []);

    return (
        <Flex>
            <Sidebar />
            <Flex as="main" flexDirection="column" width="100%" bg="#c7ccdb">
                <Flex align="center" py="14px" px="1rem" bg="#F5F5F5">
                    <Heading fontSize="xl">Payroll</Heading>
                </Flex>
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    h="100%"
                    p="1.5rem"
                    gap={5}
                >
                    <GridItem
                        // h="max-content"
                        p="20px"
                        bg="#F5F5F5"
                        rounded="md"
                        boxShadow="base"
                    >
                        <Heading size="md" mb={4}>
                            New Pay
                        </Heading>
                        <NewPay />
                    </GridItem>
                    <GridItem>
                        <Stack>
                            <EarningsTable />
                            <Box
                                p="20px"
                                bg="#F5F5F5"
                                rounded="md"
                                boxShadow="base"
                            >
                                sfsdf
                            </Box>
                        </Stack>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Payroll;
