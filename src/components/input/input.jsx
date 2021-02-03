import { Input, InputGroup } from "@chakra-ui/react";
import React from "react";

export const InputComponent = ({
  leftComponent: LeftComponents,
  rightComponent: RightComponents,
  ...field
}) => {
  return (
    <InputGroup {...field}>
      {LeftComponents}
      <Input {...field} />
      {RightComponents}
    </InputGroup>
  );
};
