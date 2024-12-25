import { Grid, Box, Text, Image } from "@chakra-ui/react";


const CategoriesSection = () => {
  const categories = [
    { name: "Medicine", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "SAVE 22% OFF" },
    { name: "Lab Tests", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "UPTO 70% OFF" },
    { name: "Healthcare", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "UPTO 60% OFF" },
    { name: "PLUS", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "SAVE 5% EXTRA" },
    { name: "Offers", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "" },
    { name: "Value Store", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0", discount: "UPTO 50% OFF" },
  ];

  return (
    <Box display="flex" justifyContent="center" p={4}>
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap={1} /* Reduce the gap between boxes */
        width="100%"
        maxWidth="1200px" /* Restrict the width of the grid */
        justifyItems="center"
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            position="relative"
            width="150px"
            height="150px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={2}
            _hover={{
              bg: "white", /* Background becomes white on hover */
              boxShadow: "lg", /* Shadow appears on hover */
              transform: "scale(1.05)", /* Scaling effect on hover */
            }}
          >
            {/* Image with bottom border */}
            <Box borderBottom="1px solid gray" pb={1} width="100%">
              <Image src={category.image} alt={category.name} boxSize="75px" mx="auto" />
            </Box>
        
            {/* Text always visible */}
            <Text mt={2} fontWeight="bold">
              {category.name}
            </Text>
            <Text color="red.500" fontSize="xs" fontWeight="semibold">
              {category.discount}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;