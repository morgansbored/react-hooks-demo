import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Box>
        <Box mx="auto" maxW={"1400px"}>
          <Navbar />
        </Box>
        <Box mx="auto" maxW={"1400px"} minH={"100vh"} fontSize="sm" bg="grey">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
