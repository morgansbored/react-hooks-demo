import React from "react";
import { Box, Stack, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import Items from "../components/items";
import Cart from "../components/cart";
import Checkout from "../components/checkout";

export default function Shop() {
  return (
    <>
      <Box minH={"100vh"} fontSize="sm" bg="grey">
        <Box
          p={12}
          minH={"100vh"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={6} direction={"column"} align={"left"} mx={"auto"}>
            <Heading fontSize={"4xl"}>Select items</Heading>
            <Items />
            <Flex justifyContent="space-between">
              <Cart />
              <Checkout />
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
