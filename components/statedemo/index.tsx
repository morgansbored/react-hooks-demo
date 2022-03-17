import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Link as _Link,
} from "@chakra-ui/react";

export default function StateDemo() {
  const [currentColour, setCurrentColour] = useState("black");
  return (
    <>
      <Heading fontSize={"2xl"}>useState</Heading>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <Text fontSize={"lg"} color={"gray.600"}>
            A state variable{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              currentColour
            </Text>{" "}
            is initialised to black using the{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              useState
            </Text>{" "}
            hook:
          </Text>
          <Text fontSize={"lg"} color={"gray.600"}>
            The buttons below invoke the associated{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              setCurrentColour
            </Text>{" "}
            action.
          </Text>
          <Box
            maxWidth={"50%"}
            border="1px"
            rounded={"lg"}
            borderColor="gray.200"
            p={8}
          >
            <Stack spacing={4}>
              <Text fontSize={"lg"} color={"gray.600"}>
                Current colour:{" "}
                <Text as={"span"} fontWeight={600}>
                  {currentColour}
                </Text>
              </Text>
              <Flex w={"80%"}>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Change colour to:
                </Text>
                <Button
                  ml={"3"}
                  mr={"1"}
                  onClick={() => setCurrentColour("red")}
                >
                  Red
                </Button>
                <Button
                  ml={"1"}
                  mr={"1"}
                  onClick={() => setCurrentColour("green")}
                >
                  Green
                </Button>
                <Button ml={"1"} onClick={() => setCurrentColour("blue")}>
                  Blue
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
