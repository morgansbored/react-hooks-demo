import React, { useState, useContext } from "react";
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

const CountContext = React.createContext(null);

const DescendantA = () => {
  const { count1, setCount1, count2, setCount2 } = useContext(CountContext);

  return (
    <>
      <Box border="1px" rounded={"lg"} borderColor="gray.200" p={8}>
        <Stack spacing={4}>
          <Heading fontSize={"lg"}>Descendant A</Heading>
          <Text fontSize={"lg"}>
            Receives values count1: {count1} count2: {count2}
          </Text>
          <Button onClick={() => setCount1((c) => c + 1)}>count1 ++</Button>
          <Button onClick={() => setCount2((c) => c + 1)}>count2 ++</Button>
        </Stack>
      </Box>
    </>
  );
};
const DescendantB = () => {
  const { count1, setCount1, count2, setCount2 } = useContext(CountContext);

  return (
    <>
      <Box border="1px" rounded={"lg"} borderColor="gray.200" p={8}>
        <Stack spacing={4}>
          <Heading fontSize={"lg"}>Descendant B</Heading>
          <Text fontSize={"lg"}>
            Receives values count1: {count1} count2: {count2}
          </Text>
          <Button onClick={() => setCount1((c) => c + 1)}>count1 ++</Button>
          <Button onClick={() => setCount2((c) => c + 1)}>count2 ++</Button>
        </Stack>
      </Box>
    </>
  );
};

export default function ContextDemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count1, setCount1, count2, setCount2 }}>
        <Heading fontSize={"2xl"}>useContext</Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Text fontSize={"lg"} color={"gray.600"}>
              This component is wrapped in a{" "}
              <Text as={"span"} fontWeight={600} color={"blue.500"}>
                Context
              </Text>{" "}
              which provides the state variables{" "}
              <Text as={"span"} fontWeight={600} color={"blue.500"}>
                count1
              </Text>{" "}
              and{" "}
              <Text as={"span"} fontWeight={600} color={"blue.500"}>
                count2
              </Text>
              .
            </Text>
            <Text fontSize={"lg"}>
              Two descendant components, shown below, use the context via the{" "}
              <Text as={"span"} fontWeight={600} color={"blue.500"}>
                useContext
              </Text>{" "}
              hook and receiving the values.
            </Text>
            <Box border="1px" rounded={"lg"} borderColor="gray.200" p={8}>
              <Stack spacing={4}>
                <Text fontSize={"lg"}>
                  Context values count1: {count1} count2: {count2}
                </Text>
                <Flex w={"80%"} align="center" justify="space-around">
                  <DescendantA />
                  <DescendantB />
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </CountContext.Provider>
    </>
  );
}
