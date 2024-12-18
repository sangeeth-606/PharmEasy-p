// import React from 'react'

import { HStack } from "@chakra-ui/react";
import Scrollboxreuse from "./Scrollboxreuse";

const Labtest = () => {
  return (
    <div className="mb-5 mt-5" style={{ overflow: "hidden" }}>
      <div className="p-5 m-10  "
        style={{
          width: "75%", // 70% width for the parent container
          maxWidth: "75vw", // Prevent exceeding 70% of the viewport width
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div  >
          <h1 className="text-3xl font-semibold mb-4">Lab Tests by Health Concern</h1>
          <HStack>
            <p className="text-gray-500" style={{ marginRight: "10px", fontSize: "16px", fontWeight: "500" }}>Powered by</p>
            <img
              className="4-6 h-5"
              src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
              alt=""
            />
          </HStack>
        </div>
      </div>
      <Scrollboxreuse  />
    </div>
  );
};

export default Labtest;
