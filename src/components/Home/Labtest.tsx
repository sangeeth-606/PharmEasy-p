// import React from 'react'

import { HStack } from "@chakra-ui/react";
import Scrollboxreuse from "./Scrollboxreuse";

const Labtest = () => {
  return (
    <>
      <div
        style={{
          width: "70%", // 70% width for the parent container
          maxWidth: "70vw", // Prevent exceeding 70% of the viewport width
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          <h1>Lab Tests by Health Concern</h1>
          <HStack>
            <p>Powered by</p>
            <img
              className="4-6 h-5"
              src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
              alt=""
            />
          </HStack>
        </div>
      </div>
      <Scrollboxreuse />
    </>
  );
};

export default Labtest;
