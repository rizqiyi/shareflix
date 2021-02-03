import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      margin="auto 0 auto"
      onClick={toggle}
    >
      {isOpen ? (
        <CloseIcon
          color="grey.500"
          _hover={{
            color: "grey.700",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        />
      ) : (
        <HamburgerIcon
          color="grey.500"
          _hover={{
            color: "grey.700",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          w={7}
          h={7}
        />
      )}
    </Box>
  );
};
