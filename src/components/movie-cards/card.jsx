import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, Skeleton } from "@chakra-ui/react";
import React from "react";
import { TextComponent } from "../text/text";
import emptyPath from "../../assets/undraw_empty_street_sfxm.svg";

export const CardComponent = ({ data, isLoading, arr }) => {
  const posterIsEmpty = data.backdrop_path === null;

  return (
    <Box
      d="flex"
      width={{ base: "80%", sm: "80%", md: "35em" }}
      shadow="md"
      maxW={{ sm: "sm", md: "inherit" }}
      margin="0 auto"
      borderWidth="1px"
      borderRadius="lg"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      _hover={{
        backgroundColor: "grey.50",
        transition: "all 0.3s ease",
        cursor: "pointer",
        opacity: 0.9,
      }}
    >
      <Box>
        {isLoading ? (
          <Skeleton
            width={{ sm: "100%", md: "300px" }}
            height="160px"
            borderRadius="lg"
          />
        ) : (
          <Image
            borderRadius="lg"
            src={
              !posterIsEmpty
                ? `http://image.tmdb.org/t/p/w500${data.backdrop_path}`
                : emptyPath
            }
            alt={data.title}
          />
        )}
      </Box>
      <Box
        d="flex"
        p={6}
        paddingTop={2}
        paddingBottom={2}
        paddingRight={3}
        flexDirection="column"
      >
        <Box ml>
          {isLoading ? (
            <Skeleton
              width="60px"
              height="15px"
              borderRadius="lg"
              px="2"
              isLoaded={!isLoading}
            />
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {data.release_date.split("-")[0]}
            </Badge>
          )}
          {isLoading ? (
            <Skeleton
              width="200px"
              height="15px"
              mt={2}
              borderRadius="lg"
              px="2"
              isLoaded={!isLoading}
            />
          ) : (
            <TextComponent
              title={data.title}
              fontWeight="bold"
              isTruncated
              width="220px"
              mt={2}
              textTransform="inherit"
              textStyle="text"
              fontSize="sm"
              letterSpacing="wide"
            />
          )}
        </Box>
        {isLoading ? (
          <Skeleton
            width="150px"
            height="15px"
            mt={2}
            borderRadius="lg"
            isLoaded={!isLoading}
          />
        ) : (
          <Box>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < data.vote_average - 4 ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {data.vote_count} reviews
            </Box>
          </Box>
        )}
        {isLoading ? (
          <Skeleton
            width="80px"
            height="15px"
            mt={14}
            borderRadius="lg"
            px="2"
            isLoaded={!isLoading}
          />
        ) : (
          <Box mt={10} d="flex" alignItems="flex-end">
            <TextComponent
              title="See Details"
              fontWeight="bold"
              textTransform="inherit"
              textStyle="text"
              fontSize="sm"
              letterSpacing="wide"
              _hover={{
                color: "teal.600",
                transition: "all 0.3s ease",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
