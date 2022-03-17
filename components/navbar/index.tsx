import React from "react";
import { NextComponentType } from "next";
import {
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link as _Link,
} from "@chakra-ui/react";

const Navbar: NextComponentType = () => {
  return (
    <Box p={12} pos="relative" bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={4} px={6}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          react hooks{" "}
          <Text as={"span"} color={"blue.500"}>
            demo
          </Text>
        </Heading>
      </Stack>
    </Box>
  );
};

export default Navbar;
