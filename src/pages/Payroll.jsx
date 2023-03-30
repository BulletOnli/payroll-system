import React, { useEffect } from "react";
import { Flex, Heading, Grid, GridItem, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import NewPay from "../components/NewPay";
import EarningsTable from "../components/EarningsTable";
import { useGlobalContext } from "../context/Context";

const Payroll = () => {
    const { payrollData, dispatch } = useGlobalContext();

    useEffect(() => {
        fetch("http://localhost:3000/payroll")
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
                <Grid templateColumns="repeat(2, 1fr)" p="1.5rem" gap={5}>
                    <GridItem
                        bg="#F5F5F5"
                        p="20px"
                        boxShadow="base"
                        rounded="md"
                    >
                        <Heading size="md" mb={4}>
                            New Pay
                        </Heading>
                        <NewPay />
                    </GridItem>
                    <GridItem
                        bg="#F5F5F5"
                        p="20px"
                        h="max-content"
                        boxShadow="base"
                        rounded="md"
                    >
                        <Heading size="md" mb={2}>
                            Earnings
                        </Heading>
                        <EarningsTable />
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Payroll;
