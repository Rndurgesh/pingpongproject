import { Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { FaTableTennis } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      justify="center"
      align="center"
      // gap="10px"
      bg="gray.50"
      fontSize="20px"
      fontFamily="cursive"
      textAlign="center"
      h="85px"
      as="h3"
      // pt={1}
      // mt={4}
      bgGradient="linear(to-r, gray.600, gray.100, gray.600)"
    >
      <FaTableTennis size="30px" />
      <Text m={4}>Have a Great Game!!!...</Text>
      <FaTableTennis size="30px" />
    </Flex>
  );
}
