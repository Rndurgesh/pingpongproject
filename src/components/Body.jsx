import {
  Container,
  Box,
  Image,
  Text,
  Select,
  HStack,
  VStack,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
const init = 0;

export default function Body() {
  const [point, setpoint] = useState(init);
  const [valA, setA] = useState(0);
  const [valB, setB] = useState(0);

  const reset = () => {
    alert("The game is Restared now");
    setA(init);
    setB(init);
  };

  const updateA = () => {
    if (valA >= point) {
      alert("A Won");
      setA(init);
      setB(init);
    } else {
      setA((valA) => valA + 1);
    }
  };

  const updateB = () => {
    if (valB >= point) {
      alert("B Won");
      setB(init);
      setA(init);
    } else {
      setB((valB) => valB + 1);
    }
  };
  const updateInputA = (e) => {
    setA(e.target.value);
  };
  const updateInputB = (e) => {
    setB(e.target.value);
  };

  return (
    <Box bgGradient="linear(to-r, gray.600, gray.100, gray.600)">
      <Container>
        <Text
          textAlign="center"
          // mt="10px"

          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          Let's Start the Game
        </Text>
        <Box justify="center">
          <Image
            w="full"
            h="312px"
            borderTopRadius="30px "
            src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Table tennis image"
          />
        </Box>
        <Box
          bg="gray.300"
          p="15px"
          justifyItems="center"
          borderBottomRadius="15px"
          height="250px"
        >
          <HStack>
            <Select
              placeholder="Select Match point"
              fontWeight="bold"
              bg="teal.500"
              color="gray.900"
              value={point}
              onChange={(e) => setpoint(e.target.value)}
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>21</option>
            </Select>
          </HStack>
          <HStack justifyContent="center" mt="20px" gap="100px">
            <VStack mt="5px" gap="10px">
              <Input
                variant="outline"
                w="70px"
                bg="gray.500"
                color="white"
                type="number"
                value={valA}
                onChange={updateInputA}
              ></Input>
              <Button colorScheme="teal" onClick={updateA}>
                Player A
              </Button>
            </VStack>
            <VStack mt="5px" gap="10px">
              <Input
                variant="outline"
                w="70px"
                bg="gray.500"
                color="white"
                type="number"
                value={valB}
                onChange={updateInputB}
              ></Input>
              <Button colorScheme="teal" onClick={updateB}>
                Player B
              </Button>
            </VStack>
          </HStack>
          <HStack justifyContent="center" mt="20px">
            <Button
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              onClick={reset}
            >
              Reset
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
