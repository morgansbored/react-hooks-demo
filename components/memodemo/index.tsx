import React, { useState, useMemo } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

function squareNum(number) {
  return Math.pow(number, 2);
}

export default function MemoDemo() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const handleChange = (value) => setNumber(value);
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
  return (
    <>
      <Heading fontSize={"2xl"}>useMemo</Heading>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <Text fontSize={"lg"} color={"gray.600"}>
            This component is newly rendered each time a state variable{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              counter
            </Text>{" "}
            is incremented.
          </Text>
          <Text fontSize={"lg"} color={"gray.600"}>
            Regardless of these renders, another value{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              squaredNum
            </Text>{" "}
            is only recalculated if the value in the input box changes.
          </Text>
          <Text fontSize={"lg"} color={"gray.600"}>
            This is accomplished using the{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              useMemo
            </Text>{" "}
            hook, which is used to save expensive code from being re-run
            unnecessarily.
          </Text>
          <Flex w={"50%"} align="center" justify="space-around">
            <Box border="1px" rounded={"lg"} borderColor="gray.200" p={8}>
              <Stack spacing={4}>
                <Text fontSize={"lg"} color={"gray.600"}>
                  counter: {counter}
                </Text>
                <Button onClick={() => setCounter(counter + 1)}>
                  Increment
                </Button>
              </Stack>
            </Box>
            <Box border="1px" rounded={"lg"} borderColor="gray.200" p={8}>
              <Stack spacing={4}>
                <NumberInput value={number} onChange={handleChange}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text fontSize={"lg"} color={"gray.600"}>
                  squaredNum: {squaredNum}
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
