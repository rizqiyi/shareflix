import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { TextComponent } from "../text/text";

function NavText({ title, ...props }) {
  return (
    <TextComponent
      color="grey.500"
      title={title}
      fontSize="lg"
      mr={10}
      textStyle="navtext"
      display="block"
      _hover={{
        color: "grey.700",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      {...props}
    />
  );
}

export const MenuItem = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      mt={6}
      paddingBottom={[6, "1rem"]}
    >
      <Stack
        spacing={8}
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavText title="Home" />
        <NavText title="Docs" />
        <NavText title="Examples" />
      </Stack>
    </Box>
  );
};
