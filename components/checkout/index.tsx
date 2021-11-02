import { useRouter } from "next/router";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ProductItem } from "../../global";

export default function Checkout() {
  const products = useSelector((state: ProductItem[]) => state);
  const total = products
    .reduce((acc, current) => (acc += current.price * current.quantity), 0)
    .toFixed(2);
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [radioValue, setRadioValue] = useState("0");

  const handleSubmit = () => {
    router.push("/confirmation");
  };

  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      minW={"600"}
    >
      <Stack spacing={4}>
        <Heading fontSize={"3xl"}>Checkout</Heading>
        <FormControl id="firstname">
          <FormLabel>First name</FormLabel>
          <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>
        <FormControl id="lastname">
          <FormLabel>Last name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>E-mail address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="paymenttype">
          <RadioGroup onChange={setRadioValue} value={radioValue}>
            <Stack direction="row">
              <Radio value="0">Card</Radio>
              <Radio value="1">Paypal</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Box display={radioValue == "0" ? "block" : "none"}>
          <FormControl id="card">
            <FormLabel>Card number</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="expiry">
            <FormLabel>Expiry date</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <Box display={radioValue == "1" ? "block" : "none"}>
          <FormControl id="paypal">
            <FormLabel>Paypal e-mail address</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <Stack spacing={10}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => handleSubmit()}
          >
            Pay &pound;{total}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
