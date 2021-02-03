import React, { useState } from "react";
import { TextComponent } from "../text/text";
import { MenuItem } from "./menu-item";
import { MenuToggle } from "./menu-toggle";
import { NavbarContainer } from "./navbar-container";

export const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <NavbarContainer>
      <TextComponent
        title="shareflix"
        textStyle="h2"
        _hover={{
          cursor: "pointer",
        }}
        color="grey.600"
        fontSize="3xl"
        fontWeight="bold"
      />
      <MenuToggle toggle={handleClick} isOpen={show} />
      <MenuItem isOpen={show} />
    </NavbarContainer>
  );
};
