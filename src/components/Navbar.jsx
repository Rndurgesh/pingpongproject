import { Box, Heading, HStack, Button, Spacer, Flex } from "@chakra-ui/react";

export default function C() {
  return (
    <Flex bg="gray.500" alignItems="center" h="60px">
      <Box color="white" fontSize="20px">
        <Heading size="md " px="10">
          Ping Pong
        </Heading>
      </Box>
      <Spacer />
      <Box p="4" gap="5px" ml="40px">
        <HStack>
          <Button
            color="black"
            bg="white"
            _hover={{ bg: "gray.600", color: "white" }}
          >
            Login
          </Button>
          <Button
            color="black"
            bg="white"
            _hover={{ bg: "gray.600", color: "white" }}
          >
            Sign Up
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}
