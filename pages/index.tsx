import type { NextPage } from "next";
import { Box, Input, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
      <Box
        height="100%"
        pb="6rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="/logo.svg" height="2.25rem" />
        <Box mt="5.5rem" position="relative" left="0" top="0">
          <Input
            width="40rem"
            fontSize="20px"
            px="0.75rem"
            variant="flushed"
            color="white"
            placeholder="Search Block / Tx / Account"
          />
          <SearchIcon
            position="absolute"
            color="white"
            right="0.5rem"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
