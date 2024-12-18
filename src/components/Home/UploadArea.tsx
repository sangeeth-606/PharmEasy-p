import { Button, HStack, Box, Text } from "@chakra-ui/react";

const UploadArea = () => {
  return (
    <Box
      width="75%"
      maxWidth="75vw"
      margin="0 auto"
      marginTop={16}
      overflow="hidden"
      boxSizing="border-box"
    >
      <HStack
        align="stretch"
        boxShadow="lg"
        borderRadius="8px"
        border="1px solid #E2E8F0"
        spacing="0"
      >
        {/* Left Section */}
        <Box
          width="40%"
          padding="20px"
          backgroundColor="#D9E1EF"
          borderRadius="8px 0 0 8px"
        >
          <HStack spacing={4} align="start">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
              alt="Upload Prescription"
              style={{ maxWidth: "100px", height: "100px" }}
            />
            <Box>
              <Text fontSize="1.25rem" fontWeight="bold" mb="8px" color="#2D3748">
                Order with Prescription
              </Text>
              <Text fontSize="0.9rem" mb="16px" color="#4A5568">
                Upload prescription and we will deliver your medicines
              </Text>
              <Button colorScheme="teal" size="md">
                Upload
              </Button>
            </Box>
          </HStack>
        </Box>

        {/* Right Section */}
        <Box
          width="60%"
          padding="20px"
          borderLeft="none"
          backgroundColor="white"
          borderRadius="0 8px 8px 0"
        >
          <Text
            fontWeight="semibold"
            fontSize="1.1rem"
            color="#4A5568"
            mb="12px"
          >
            How does this work?
          </Text>
          <HStack spacing={8} align="start">
            <Box as="ol" pl="20px" lineHeight="1.6" fontSize="0.9rem">
              <Box as="li" mb="8px" color="#4A5568">
                Upload a photo of your prescription
              </Box>
              <Box as="li" mb="8px" color="#4A5568">
                Add delivery address and place the order
              </Box>
            </Box>
            <Box as="ol" pl="20px" lineHeight="1.6" fontSize="0.9rem">
              <Box as="li" mb="8px" color="#4A5568">
                We will call you to confirm the medicines
              </Box>
              <Box as="li" mb="8px" color="#4A5568">
                Now, sit back! Your medicines will get delivered at your doorstep
              </Box>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UploadArea;
