import type { NextPage } from "next";
import { Box, Input, Image } from "@chakra-ui/react";

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
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="/logo.svg" height="2.25rem" />
        <Input
          variant="flushed"
          color="white"
          placeholder="Search Block / Tx / Account"
        />
      </Box>
    </Box>
  );
};

export default Home;
