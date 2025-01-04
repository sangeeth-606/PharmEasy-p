import React from "react";
import { Button, VStack, Box, Text, Input, Link } from "@chakra-ui/react";

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      height="100vh"
      padding="1rem"
      gap="1rem"
      bgColor="gray.50"
    >
      <Box
        width="400px"
        bgColor="white"
        padding="1.5rem"
        borderRadius="md"
        boxShadow="md"
        position="relative"
      >
        <Box
          bgColor="#10847e"
          padding="1rem"
          borderRadius="md"
          marginBottom={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=256x0"
            alt="PharmEasy Logo"
            style={{ width: "128px", height: "auto", borderRadius: "4px" }}
          />
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0"
            alt="Banner"
            style={{ width: "128px", height: "auto" }}
          />
        </Box>

        <VStack spacing={4} alignItems="flex-start">
          <Text fontSize="xl" fontWeight="bold" color="#10847e">
            Quick Login / Register
          </Text>
          <Input
            placeholder="Enter your phone number"
            type="number"
            variant="outline"
            focusBorderColor="teal.400"
            bgColor="white"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          />
          <Button bgColor="#10847e" color="white" _hover={{ bgColor: "#0b6b5f" }} width="full">
            Send OTP
          </Button>
        </VStack>

        <Box position="absolute" bottom="1rem" left="50%" transform="translateX(-50%)" textAlign="center">
          <Text fontSize="sm" color="gray.600">
            By continuing, you agree with our
          </Text>
          <Link href="#" fontSize="sm" color="teal.500" textDecoration="underline">
            Privacy Policy
          </Link>{" "}
          <Text as="span" fontSize="sm" color="gray.600">and</Text>{" "}
          <Link href="#" fontSize="sm" color="teal.500" textDecoration="underline">
            Terms and Conditions
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
