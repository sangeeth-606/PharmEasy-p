import { Button, HStack } from "@chakra-ui/react";

const WhyChooseUs = () => {
  return (
    <div className="w-3/4 max-w-3/4  mx-auto mb-5">
      <div
        style={{
          backgroundColor: "#f8f9ff",
          marginTop: "50px",
          padding: "30px",
          borderRadius: "5px",
          //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Added a subtle shadow for depth
        }}
        className="1stone"
      >
        <div>
          <h1 className="text text-3xl font-semibold text">Why Choose Us?</h1>
        </div>
        <HStack className="mt-10" spacing="24px" padding="20px">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <HStack padding="20px" spacing="16px">
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0"
                  alt="Family Icon"
                  style={{ width: "48px", height: "48px" }} // Ensured consistent sizing
                />
                <div>
                  <h1 className="text text-xl font-semibold">46 Million+</h1>
                  <p>Registered users as of Oct 31, 2024</p>
                </div>
              </HStack>
            </div>
          ))}
        </HStack>
      </div>

      <div
        style={{
          marginTop: "50px",
          backgroundImage:
            "url('https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100')",
          backgroundSize: "cover", // Ensures the image covers the div completely
          backgroundPosition: "center", // Centers the image within the div
          backgroundRepeat: "no-repeat", // Prevents tiling of the background image
          width: "100%", // Makes the div take up the full width of its container
          height: "300px", // Adjusted height for a balanced layout
          display: "flex", // Flexbox for centering
          justifyContent: "center", // Centers the child horizontally
          alignItems: "center",
        }}
        className="2ndone"
      >
        <div style={{
          padding: "10px",
        }} >
            <h1 className="text-3xl font-semibold ">Simplifying</h1>
            <h1 className="text-3xl font-semibold ">Healthcare</h1>
            <h1 className="text-3xl font-semibold ">Impacting Lives</h1>
            <h2 className="text-2xl font-medium  mt-4">Download the App for Free</h2>
          <HStack style={{
            padding: "20px",
          }} >
            <Button
              style={{
                backgroundImage:
                  "url('https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0')",
                backgroundSize: "cover", // Ensures the image covers the div completely
                backgroundPosition: "center", // Centers the image within the div
                backgroundRepeat: "no-repeat", // Prevents tiling of the background image
                width: "150px", // Makes the div take up the full width of its container
              }}
            ></Button>
            <Button
              style={{
                backgroundImage:
                  "url('https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=256x0')",
                backgroundSize: "cover", // Ensures the image covers the div completely
                backgroundPosition: "center", // Centers the image within the div
                backgroundRepeat: "no-repeat", // Prevents tiling of the background image
                width: "150px", // Makes the div take up the full width of its container
              }}
            ></Button>
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
