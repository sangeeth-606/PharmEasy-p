
import { ChakraProvider,  Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Herosection from "./components/Home/Herosection";
import CategoriesSection from "./components/Home/CategoriesSection";
// import { Scroll } from "lucide-react";
// import ScrollableNav from "./components/Home/ScrollableNav";
import Slugscroll from "./components/Home/Slugscroll";
// import Scrollboxreuse from "./components/Home/Scrollboxreuse";
import Labtest from "./components/Home/Labtest";
import UploadArea from "./components/Home/UploadArea";
import ShopbyCategories from "./components/Home/ShopbyCategories";
import AdsArea from "./components/Home/AdsArea";
import LabtestCard from "./components/Home/LabtestCard";
// import ScrollboxreuseType2 from "./components/Home/ScrollboxreuseType2";
import SpotLight from "./components/Home/SpotLight";
import ScrollType3 from "./components/Home/ScrollType3";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import What from "./components/foooterr/What";


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
        <GridItem area="footer" padding={4}>
          <What />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
