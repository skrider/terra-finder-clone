import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    background: {
      dark: "#092385",
    },
  },
  styles: {
    global: {
      "*": {
        fontFamily: "Montserrat",
      },
    },
  },
};

export default extendTheme(theme);
