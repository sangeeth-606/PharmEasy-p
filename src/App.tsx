
import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Herosection from "./components/Home/Herosection";

function App() {
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
