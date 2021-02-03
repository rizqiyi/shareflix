import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h2: {
      fontFamily: "Open Sans",
    },
    navtext: {
      fontWeight: "500",
    },
    text: {
      fontFamily: "Open Sans",
    },
  },
  colors: {
    yellow: {
      400: "#ECC94B",
    },
    grey: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
    },
  },
});

export default theme;
