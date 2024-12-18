
import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Herosection from "./components/Home/Herosection";
import CategoriesSection from "./components/Home/CategoriesSection";
// import { Scroll } from "lucide-react";
// import ScrollableNav from "./components/Home/ScrollableNav";
import Slugscroll from "./components/Home/Slugscroll";
// import Scrollboxreuse from "./components/Home/Scrollboxreuse";
import Labtest from "./components/Home/Labtest";

function App() {
  // const categories = [
  //   { id: '1', label: 'All Products' },
  //   { id: '2', label: 'Electronics' },
  //   { id: '3', label: 'Clothing' },
  //   { id: '4', label: 'Books' },
  //   { id: '5', label: 'Home & Garden' },
  //   { id: '6', label: 'Sports' },
  //   { id: '7', label: 'Automotive' },
  //   { id: '8', label: 'Health & Beauty' },
  //   { id: '9', label: 'Toys & Games' },
  //   { id: '10', label: 'Pet Supplies' },
  // ];
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header header" "main main" "footer footer"`,
        }}
        gridTemplateRows={"auto 1fr auto"}
        height="100vh"
        gap={0}
      >
        {/* Navbar */}
        <GridItem area="header"  color="white" padding={4}>
        <Navbar />
        </GridItem>

        {/* Main Content */}
        <GridItem area="main" bg="gray.100" padding={4}>
          <Herosection />
          <CategoriesSection />
          {/* <ScrollableNav items={categories} /> */}
          <Slugscroll />
          <Labtest />
        </GridItem>

        {/* Footer */}
        <GridItem area="footer" bg="blue.700" color="white" padding={4}>
          <Box textAlign="center" fontSize="md">
            Footer
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
