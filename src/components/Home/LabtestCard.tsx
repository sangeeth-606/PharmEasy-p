// import { HStack } from "@chakra-ui/react";
import { Box, Text, VStack, HStack, Badge, Flex } from "@chakra-ui/react";

interface Package {
    topText: string;
    middleText: string;
    bottomPrice: string;
    image: string;
  }
  
  const packages: Package[] = [
    {
      topText: "60% OFF",
      middleText: "Healthy 2024 Full Body Checkup",
      bottomPrice: "₹1449",
      image: "", // Add your image link here
    },
    {
      topText: "43% OFF",
      middleText: "Diabetes Care",
      bottomPrice: "₹799",
      image: "", // Add your image link here
    },
    {
      topText: "53% OFF",
      middleText: "Basic Health Checkup",
      bottomPrice: "₹1049",
      image: "", // Add your image link here
    },
    {
      topText: "46% OFF",
      middleText: "Aarogyam Full Body Checkup with Vitamins",
      bottomPrice: "₹2499",
      image: "", // Add your image link here
    },
  ];

const LabtestCard = () => {
  return (
    <div className="w-3/4 max-w-3/4  mx-auto mt-10 mb-5 m-0  box-border">
      <HStack className="mt-5" justify="space-between" mb={4}>
        <h1 className="text-2xl font-medium">Frequently Booked Lab Tests</h1>
        <button className=" text-emerald-500 font-medium py-2 px-4 rounded">View All</button>
      </HStack>
      <Flex wrap="wrap" justify="center" gap={5} >
        {packages.map((pkg, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="base"
            overflow="hidden"
            width="300px"
            height="300px"
            border="none"
            p={4}
            m={2}
            bg={index % 2 === 0 ? "blue.50" : "yellow.50"}
          >
            <Badge colorScheme="red" mb={2} fontSize="sm">
              {pkg.topText}
            </Badge>
            <VStack spacing={3} align="flex-start">
              <Text fontWeight="bold">{pkg.middleText}</Text>
              <Text fontSize="sm" color="gray.600">
                {/* Placeholder for description */}
                Diagnostic details or additional information can go here.
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="gray.800">
                {pkg.bottomPrice}
              </Text>
            </VStack>
            <Box mt={4} height="120px" bg="gray.200">
              {/* Image placeholder */}
              <Text textAlign="center" pt={10} color="gray.500">
                Image Placeholder
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default LabtestCard;








