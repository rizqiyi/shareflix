import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  IconButton,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import { CardComponent } from "../components/movie-cards/card";
import { ResponsiveText, TextComponent } from "../components/text/text";
import useFetchData from "../hooks/useFetchData";
import { moviesURI } from "../uri";
import emptyPath from "../assets/undraw_empty_street_sfxm.svg";

export const HomePage = ({ input }) => {
  const [pages, setPages] = useState(1);

  let [data, loading] = useFetchData(moviesURI(pages));

  const handleClick = useMemo(
    () => (flag) => {
      if (flag === "increment") {
        return setPages(pages + 1);
      } else {
        return setPages(pages - 1);
      }
    },
    [pages]
  );

  if (input.length > 0) {
    data = data.filter((d) => {
      return d.title.toLowerCase().match(input);
    });
  }

  return (
    <Container maxWidth="6xl" mb={6}>
      <SimpleGrid minChildWidth={{ sm: "sm", md: "25em" }} spacing="40px">
        {loading ? null : data.length < 1 ? (
          <Box margin="1rem auto 0 auto" textAlign="center">
            <Image
              borderRadius="lg"
              width="600px"
              height="auto"
              src={emptyPath}
              alt="Search not found poster"
            />
            <ResponsiveText
              resp={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }}
              title="Movies not found"
              color="grey.500"
              textStyle="text"
              mt={4}
            />
          </Box>
        ) : null}
        {data.length < 1
          ? null
          : data.map((d, idx) => (
              <CardComponent key={idx} data={d} isLoading={loading} />
            ))}
      </SimpleGrid>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt={data.length < 0 ? 5 : 8}
        mb={8}
      >
        <Box>
          <IconButton
            aria-label="Prev"
            disabled={pages === 1 || !!input}
            _focus={{ boxShadow: "0 0 0 2px rgba(45, 55, 72, 0.8)" }}
            onClick={() => handleClick("decrement")}
            icon={<ChevronLeftIcon />}
          />
        </Box>
        <Box d="flex" alignItems="center" mr={5} ml={5}>
          <TextComponent title={pages} />
        </Box>
        <Box>
          <IconButton
            aria-label="Next"
            disabled={!!input}
            _focus={{ boxShadow: "0 0 0 2px rgba(45, 55, 72, 0.8)" }}
            onClick={() => handleClick("increment")}
            icon={<ChevronRightIcon />}
          />
        </Box>
      </Box>
    </Container>
  );
};
