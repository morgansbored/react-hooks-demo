import React from "react";
import { Box, Stack, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Confirmation() {
  return (
    <>
      <Box minH={"100vh"} fontSize="sm" bg="grey">
        <Box
          p={12}
          minH={"100vh"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack direction={"column"} align={"left"} mx={"auto"}>
            <Stack spacing={4} px={6}>
              <Heading fontSize={"4xl"}>Thank you</Heading>
              <Text fontSize={"md"} color={"gray.600"}>
                Your order has been placed. You should receive a confirmation
                e-mail shortly.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
