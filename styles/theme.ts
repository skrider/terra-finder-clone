import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    background: {
      dark: "#092385",
    },
  },
  components: {
    Select: {
      baseStyle: {
        ouline: "none",
      },
    },
  },
};

export default extendTheme(theme);
