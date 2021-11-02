import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Flex,
  useColorModeValue,
  Link as _Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { ProductItem } from "../../global";
import { store, add, remove, clear } from "../../store";

export default function Cart() {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        minW={"600"}
      >
        <Stack w={"80%"} mx={"auto"} spacing={4}>
          <Heading fontSize={"3xl"}>Your cart</Heading>
          <Text fontSize={"md"} color={"gray.600"}>
            You have{" "}
            {products
              .filter((product) => product.quantity > 0)
              .reduce((acc, current) => (acc += current.quantity), 0)}{" "}
            items in your basket
          </Text>
          <Stack w={"100%"} align="center" spacing={4}>
            {products
              .filter((product) => product.quantity > 0)
              .map((product: ProductItem) => (
                <React.Fragment key={product.id}>
                  <Flex
                    w={"100%"}
                    align="center"
                    justify="center"
                    justifyContent="space-between"
                  >
                    <img
                      src={product.imageUrl}
                      width="80"
                      alt={product.title}
                    />
                    <Stack align="center" spacing={4}>
                      <Heading fontSize={"lg"}>
                        {product.title} - £{product.price.toFixed(2)}
                      </Heading>
                      <Flex w={"100%"} align="center" justify="center">
                        <Link
                          pr={"5"}
                          onClick={() =>
                            store.dispatch(clear({ id: product.id }))
                          }
                        >
                          Remove
                        </Link>
                        <Button
                          onClick={() =>
                            store.dispatch(remove({ id: product.id }))
                          }
                        >
                          -
                        </Button>
                        <Text fontSize={"md"} pl={4} pr={4} color={"gray.600"}>
                          {product.quantity}
                        </Text>
                        <Button
                          onClick={() =>
                            store.dispatch(add({ id: product.id }))
                          }
                        >
                          +
                        </Button>
                      </Flex>
                    </Stack>
                  </Flex>
                </React.Fragment>
              ))}
            <Heading w={"100%"} fontSize={"xl"} textAlign="right">
              Total: &pound;
              {products
                .reduce(
                  (acc, current) => (acc += current.price * current.quantity),
                  0
                )
                .toFixed(2)}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
