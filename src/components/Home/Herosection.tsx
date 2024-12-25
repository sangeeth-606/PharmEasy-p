
import { Button, HStack } from "@chakra-ui/react";

function Herosection() {
  return (
    <div >
    <div className=" px-6 lg:px-40 py-8 mx-60">
      {/* Top Section */}
      <HStack className="justify-between mb-6 w-80%">
        <h3 className="text-xl font-semibold text-gray-700">
          What are you looking for?
        </h3>

      <span className="flex items-center text-teal-600 cursor-pointer">
        <img className="w-6 h-6 mr-2" src={"https://cdn.iconscout.com/icon/free/png-512/free-search-icon-download-in-svg-png-gif-file-formats--zoom-logo-find-magnifier-glass-user-interface-pack-icons-1502119.png?f=webp&w=256"} alt="icon" />
        <span  className="text-sm font-medium text-gray-500 " style={{ marginRight: "8px" }} >Order with prescription </span> 
        <a href="#" className="hover:underline font-semibold text-teal-600">
        UPLOAD NOW <span>&gt;</span>
        </a>
      </span>
    </HStack>

      {/* Search Section */}
      <HStack
        className="bg-white rounded-full shadow-md border border-gray-300 w-80% px-4 py-2"
        spacing={4}
      >
        <img src={"https://cdn.iconscout.com/icon/free/png-512/free-search-icon-download-in-svg-png-gif-file-formats--zoom-logo-find-magnifier-glass-user-interface-pack-icons-1502119.png?f=webp&w=256"} alt="search" className="w-5 h-5" />

        <input
          type="text"
          placeholder="Search for"
          className="w-full outline-none border-none text-gray-600 placeholder-gray-400"
        />

        <Button
          borderRadius="full"
          colorScheme="teal"
          size="md"
          px={6}
          className="text-white"
        >
          Search
        </Button>
      </HStack>
    </div>
    </div>
  );
}

export default Herosection;
