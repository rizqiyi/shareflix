import React from "react";
import { Heading } from "@chakra-ui/react";

export const HeadingComponent = ({ title, ...field }) => {
  return <Heading {...field}>{title}</Heading>;
};
