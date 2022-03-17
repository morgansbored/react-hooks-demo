import React from "react";
import StateDemo from "../components/statedemo";
import EffectDemo from "../components/effectdemo";
import ContextDemo from "../components/contextdemo";
import MemoDemo from "../components/memodemo";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Shop() {
  return (
    <>
      <Box minH={"100vh"} fontSize="sm" bg="grey">
        <Box
          p={12}
          minH={"100vh"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={14} direction={"column"} align={"left"} mx={"auto"}>
            <Text fontSize={"2xl"} color={"gray.600"}>
              This project demonstrates an understanding of React Hooks.
            </Text>
            <StateDemo />
            <EffectDemo />
            <ContextDemo />
            <MemoDemo />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
