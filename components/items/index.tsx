import React from "react";
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
import { store, add } from "../../store";
import { ProductItem } from "../../global";
import { useSelector } from "react-redux";

export default function Items() {
  const products = useSelector((state: ProductItem[]) => state);
  return (
    <>
      <Flex align="center" justify="center" justifyContent="space-between">
        {products.map((product: ProductItem) => (
          <Box
            key={product.id}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            minW={"300"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack align="center" spacing={4}>
              <img src={product.imageUrl} width="160" alt={product.title} />
              <Flex w={"100%"} align="center" justify="space-around">
                <Heading fontSize={"xl"}>{product.title}</Heading>
                <Text fontSize={"xl"} color={"gray.600"}>
                  &pound;{product.price.toFixed(2)}
                </Text>
              </Flex>
              <Button
                bg={"blue.400"}
                color={"white"}
                onClick={() => store.dispatch(add(product))}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
    </>
  );
}
