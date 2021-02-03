import { Flex } from "@chakra-ui/react";

export const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align={["baseline"]}
      justify="space-between"
      wrap="wrap"
      padding={["1rem 3rem 1rem 3rem"]}
      mb={8}
      bg="grey.100"
      {...props}
    >
      {children}
    </Flex>
  );
};
