// import { Button, HStack } from "@chakra-ui/react";
// import logo from "../Assets/logo_big.svg";
// import ic_ex from "../Assets/ic_express delivery.svg";
// import serr from "../Assets/serr.png";
// import mob from "../Assets/mob.png";
// import prof from "../Assets/prof.png";
// import offer from "../Assets/offer.png";
// import cart from "../Assets/cart.png";
// import { useState } from "react";
// import Login from "./Home/Login"; // Import the Login component
// function Navbar() {
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => setShowLogin(true);
//   const handleCloseLogin = () => setShowLogin(false);

  
//   return (
//     <div>
//       <HStack className="navbar flex justify-between items-center mx-40 top-0">
//         <img src={logo} alt="logo" />
//         <div
//           style={{
//             height: "40px",
//             width: "1px",
//             backgroundColor: "gray",
//             margin: "0 10px",
//           }}
//         ></div>
//         <div className="2nditem">
//           <div className="top">
//             <HStack>
//               <img src={ic_ex} alt="" />
//               <p className="text-gray-600 text-sm font-normal">
//                 Express delivery to
//               </p>
//             </HStack>
//           </div>
//           <div className="relative">
//             <button className="text-black font-semibold text-sm flex items-center">
//               Select pincode
//               <span className="ml-1">&#9662;</span>
//             </button>
//           </div>
//         </div>
//         {/* search container area  */}
//         <HStack
//           className="searchcontainer  text-gray-600 placeholder-gray-400"
//           borderRadius={20}
//           bg="white"
//           p={1}
//           border="1px"
//           borderColor="gray.300"
//           width="400px" /* Adjust the width here to make it longer */
//           align="center"
//           style={{ marginRight: "20px" }} /* Reduce right spacing */
//         >
//           <img src={serr} alt="search" className="w-5 h-5" />
//           <input
//             type="text"
//             placeholder="search for"
//             className="border-none outline-none w-full"
//           />
//           <Button borderRadius={20} colorScheme="teal" variant="solid">
//             Search
//           </Button>
//         </HStack>
//         <Button
//           borderRadius={8}
//           backgroundColor="eef4ff"
//           variant="solid"
//           p={2}
//           className="flex items-center"
//         >
//           <img src={mob} alt="mobile" className="w-6 h-6" />
//           <span
//             style={{
//               fontSize: "16px",
//               color: "#30363c",
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             Download App
//           </span>
//         </Button>
//         {/* <Button
//           borderRadius={8}
//           backgroundColor="transparent"
//           variant="ghost"
//           p={2}
//           className="flex items-center whitespace-nowrap"
//           boxShadow="none"
//         >
//           <img src={prof} alt="profile" className="w-4 h-4" />
//           <span className="text-xs font-base text-gray-600"
//             style={{
              
//               marginLeft: "4px",
//               fontFamily: "Arial, sans-serif",
//             }}
//           >
//             Hello, Log in
//           </span>
//         </Button> */}
//         <Button
//           borderRadius={8}
//           backgroundColor="transparent"
//           variant="ghost"
//           p={2}
//           className="flex items-center whitespace-nowrap"
//           boxShadow="none"
//           _hover={{ backgroundColor: "gray.100" }}
//           _focus={{ outline: "none", boxShadow: "none" }}
//           onClick={handleLoginClick} // onClick event to trigger the login modal
//         >
//           <img src={prof} alt="profile" className="w-6 h-6" />
//           <span
//             className="text-xs font-base text-gray-600"
//             style={{
//               marginLeft: "6px",
//               fontFamily: "Arial, sans-serif",
//               fontWeight: "500",
//             }}
//           >
//             Hello, Log in
//           </span>
//         </Button>
//         {showLogin && <Login onClose={handleCloseLogin} />}
//         <Button
//           borderRadius={8}
//           backgroundColor="transparent"
//           variant="ghost"
//           p={2}
//           className="flex items-center whitespace-nowrap"
//           boxShadow="none"
//         >
//           <img src={offer} alt="profile" className="w-4 h-4" />
//           <span
//             className="text-xs font-base text-gray-600"
//             style={{
//               // fontSize: "14px",
//               // color: "#555",
//               // fontWeight: "400",
//               marginLeft: "4px",
//               fontFamily: "Arial, sans-serif",
//             }}
//           >
//             Offers
//           </span>
//         </Button>
//         <Button
//           borderRadius={8}
//           backgroundColor="transparent"
//           variant="ghost"
//           p={2}
//           className="flex items-center whitespace-nowrap"
//           boxShadow="none"
//         >
//           <img src={cart} alt="profile" className="w-4 h-4" />
//           <span
//             className="text-xs font-base text-gray-600"
//             style={{
//               // fontSize: "14px",
//               // color: "#555",
//               // fontWeight: "400",
//               marginLeft: "4px",
//               fontFamily: "Arial, sans-serif",
//             }}
//           >
//             Cart
//           </span>
//         </Button>
//       </HStack>
//       <div>
//         <hr
//           style={{
//             border: "1px solid lightgray",
//             width: "100%",
//             margin: "10px 0",
//           }}
//         />
//       </div>
//       <ul className="flex justify-center space-x-10 text-sm font-semibold text-gray-600 mx-auto">
//         <li>
//           <a href="#">Medicine</a>
//         </li>
//         <li>
//           <a href="#">Lab Tests</a>
//         </li>
//         <a href="#" className="flex items-center">
//           Healthcare
//           <span className="ml-1">&#9662;</span>
//         </a>
//         <li>
//           <a href="#">Health Blogs</a>
//         </li>
//         <li>
//           <a href="#">PLUS</a>
//         </li>
//         <li>
//           <a href="#">Offers</a>
//         </li>
//         <li>
//           <a href="#">Value Store</a>
//         </li>
//       </ul>
     
//     </div>
//   );
// }

// export default Navbar;


import { Button, HStack, Modal, ModalOverlay, ModalContent,  ModalBody, ModalFooter, } from "@chakra-ui/react";
import logo from "../Assets/logo_big.svg";
import ic_ex from "../Assets/ic_express delivery.svg";
import serr from "../Assets/serr.png";
import mob from "../Assets/mob.png";
import prof from "../Assets/prof.png";
import offer from "../Assets/offer.png";
import cart from "../Assets/cart.png";
import { useState } from "react";
import Login from "./Home/Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div>
      <HStack className="navbar flex justify-between items-center mx-40 top-0">
        <img src={logo} alt="logo" />
        <div
          style={{
            height: "40px",
            width: "1px",
            backgroundColor: "gray",
            margin: "0 10px",
          }}
        ></div>
        <div className="2nditem">
          <div className="top">
            <HStack>
              <img src={ic_ex} alt="" />
              <p className="text-gray-600 text-sm font-normal">
                Express delivery to
              </p>
            </HStack>
          </div>
          <div className="relative">
            <button className="text-black font-semibold text-sm flex items-center">
              Select pincode
              <span className="ml-1">&#9662;</span>
            </button>
          </div>
        </div>
        {/* search container area  */}
        <HStack
          className="searchcontainer  text-gray-600 placeholder-gray-400"
          borderRadius={20}
          bg="white"
          p={1}
          border="1px"
          borderColor="gray.300"
          width="400px" /* Adjust the width here to make it longer */
          align="center"
          style={{ marginRight: "20px" }} /* Reduce right spacing */
        >
          <img src={serr} alt="search" className="w-5 h-5" />
          <input
            type="text"
            placeholder="search for"
            className="border-none outline-none w-full"
          />
          <Button borderRadius={20} colorScheme="teal" variant="solid">
            Search
          </Button>
        </HStack>
        <Button
          borderRadius={8}
          backgroundColor="eef4ff"
          variant="solid"
          p={2}
          className="flex items-center"
        >
          <img src={mob} alt="mobile" className="w-6 h-6" />
          <span
            style={{
              fontSize: "16px",
              color: "#30363c",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Download App
          </span>
        </Button>
        <Button
          borderRadius={8}
          backgroundColor="transparent"
          variant="ghost"
          p={2}
          className="flex items-center whitespace-nowrap"
          boxShadow="none"
          _hover={{ backgroundColor: "gray.100" }}
          _focus={{ outline: "none", boxShadow: "none" }}
          onClick={handleLoginClick} // onClick event to trigger the login modal
        >
          <img src={prof} alt="profile" className="w-6 h-6" />
          <span
            className="text-xs font-base text-gray-600"
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "500",
            }}
          >
            Hello, Log in
          </span>
        </Button>

        {showLogin && (
          <Modal isOpen={showLogin} onClose={handleCloseLogin}>
            <ModalOverlay />
            <ModalContent>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                {/* Render the Login component here */}
                <Login  />
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onClick={handleCloseLogin}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        <Button
          borderRadius={8}
          backgroundColor="transparent"
          variant="ghost"
          p={2}
          className="flex items-center whitespace-nowrap"
          boxShadow="none"
        >
          <img src={offer} alt="profile" className="w-4 h-4" />
          <span
            className="text-xs font-base text-gray-600"
            style={{
              marginLeft: "4px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Offers
          </span>
        </Button>
        <Button
          borderRadius={8}
          backgroundColor="transparent"
          variant="ghost"
          p={2}
          className="flex items-center whitespace-nowrap"
          boxShadow="none"
        >
          <img src={cart} alt="profile" className="w-4 h-4" />
          <span
            className="text-xs font-base text-gray-600"
            style={{
              marginLeft: "4px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Cart
          </span>
        </Button>
      </HStack>
      <div>
        <hr
          style={{
            border: "1px solid lightgray",
            width: "100%",
            margin: "10px 0",
          }}
        />
      </div>
      <ul className="flex justify-center space-x-10 text-sm font-semibold text-gray-600 mx-auto">
        <li>
          <a href="#">Medicine</a>
        </li>
        <li>
          <a href="#">Lab Tests</a>
        </li>
        <a href="#" className="flex items-center">
          Healthcare
          <span className="ml-1">&#9662;</span>
        </a>
        <li>
          <a href="#">Health Blogs</a>
        </li>
        <li>
          <a href="#">PLUS</a>
        </li>
        <li>
          <a href="#">Offers</a>
        </li>
        <li>
          <a href="#">Value Store</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
