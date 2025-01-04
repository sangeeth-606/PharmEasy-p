
import { ChakraProvider,  Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Herosection from "./components/Home/Herosection";
import CategoriesSection from "./components/Home/CategoriesSection";

import Slugscroll from "./components/Home/Slugscroll";

import Labtest from "./components/Home/Labtest";
import UploadArea from "./components/Home/UploadArea";
import ShopbyCategories from "./components/Home/ShopbyCategories";
import AdsArea from "./components/Home/AdsArea";
import LabtestCard from "./components/Home/LabtestCard";

import SpotLight from "./components/Home/SpotLight";
import ScrollType3 from "./components/Home/ScrollType3";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import What from "./components/foooterr/What";
import TextSlug from "./components/foooterr/TextSlug";
import Last from "./components/foooterr/Last";



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
        <GridItem area="main" bg="white" padding={4}>
          <Herosection />
          <CategoriesSection />
          <Slugscroll />
          <Labtest />
          <UploadArea />
          <ShopbyCategories />
          <AdsArea />
          <LabtestCard/>
          
          <SpotLight />
          <ScrollType3 />
          <WhyChooseUs />
        </GridItem>

        {/* Footer */}
        <GridItem area="footer" bg="white" padding={4}>
          <What />
          <TextSlug />
          <Last />
          {/* <Login /> */}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
