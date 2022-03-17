import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link as _Link,
} from "@chakra-ui/react";

export default function EffectDemo() {
  const [windowWidth, setWindowWidth] = useState(0);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // effect = side effect of a render
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      // useEffect cleanup
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // empty array = only on first render
  return (
    <>
      <Heading fontSize={"2xl"}>useEffect</Heading>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <Text fontSize={"lg"} color={"gray.600"}>
            Another state variable{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              windowWidth
            </Text>{" "}
            stores the width of the browser window:
          </Text>
          <Text fontSize={"lg"} color={"gray.600"}>
            Current window width:{" "}
            <Text as={"span"} fontWeight={600}>
              {windowWidth}px
            </Text>
          </Text>
          <Text fontSize={"lg"} color={"gray.600"}>
            It is updated via a{" "}
            <Text as={"span"} fontWeight={600} color={"blue.500"}>
              useEffect
            </Text>{" "}
            which adds a 'resize' listener
          </Text>
        </Stack>
      </Box>
    </>
  );
}
