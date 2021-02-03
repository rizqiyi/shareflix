import React from "react";
import { Text } from "@chakra-ui/react";

export const TextComponent = ({ title, resp, ...field }) => {
  const { fontSize } = field;
  return (
    <Text {...field} fontSize={fontSize ? fontSize : resp}>
      {title}
    </Text>
  );
};

/* Responsive text example */

/* 
  <ResponsiveText
    resp={{ base: "24px", md: "40px", lg: "56px" }}
    title="Responsive"
    rest element ...
  />
*/

export const ResponsiveText = ({ title, resp, ...field }) => {
  return <TextComponent resp={resp} title={title} {...field} />;
};
