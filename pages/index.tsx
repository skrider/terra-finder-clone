import type { NextPage } from "next";
import { Box, Input, Text, Select } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box
      bg="background.dark"
      position="relative"
      width="100vw"
      height="100vh"
      overflow="hidden"
    >
      <Box
        opacity="0.15"
        position="absolute"
        top="0"
        left="0"
        width="9999px"
        height="100%"
        __css={{
          "& > video": {
            height: "100%",
          },
        }}
      >
        <video playsInline autoPlay muted loop>
          <source src="/terrafinder.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box width="100%" height="100%">
        <Box width="100%" display="flex" justifyContent="flex-end">
          <Select placeholder="Select option">
            <option>Mainnet</option>
            <option>Testnet</option>
            <option>Localterra</option>
          </Select>
        </Box>
        <Box
          height="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Select zIndex="2" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
