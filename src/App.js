import { ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  InputLeftElement,
  Container,
  Divider,
  IconButton,
  Fade,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { InputComponent } from "./components/input/input";
import { NavbarComponent } from "./components/navbar/navbar";
import { HomePage } from "./pages/home";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box>
      <Box position="fixed" bottom={[5, 10]} right={[5, 10]}>
        {isVisible && (
          <Fade in>
            <IconButton
              aria-label="go to top"
              // size="lg"
              _focus={{ boxShadow: "0 0 0 2px rgba(45, 55, 72, 0.8)" }}
              onClick={scrollToTop}
              icon={<ChevronUpIcon boxSize="1.4em" />}
            />
          </Fade>
        )}
      </Box>
      <NavbarComponent />
      <Container maxW="2xl">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          marginTop={10}
        >
          <InputComponent
            leftComponent={
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
            }
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            placeholder="Search movies.."
            variant="filled"
            focusBorderColor="grey.700"
            size="lg"
          />
        </Box>
        <Box marginTop={10} marginBottom={4}>
          <Divider />
        </Box>
      </Container>
      <HomePage input={inputValue} />
    </Box>
  );
}

export default App;
