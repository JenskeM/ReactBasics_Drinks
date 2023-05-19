import { Box, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Box
      bg="blue.300"
      color="white"
      _hover={{ bg: "orange.400" }}
      width={200}
      height={59}
      mb={2}
      py={10}
      cursor="pointer"
      borderRadius="50%"
      borderWidth={2}
      display="flex"
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
      onClick={() => clickFn(drink)}
    >
      <Image src={drink.imgUrl} height={50} width={50} borderRadius="50%" />
      <Text ml={4} fontWeight="semibold">
        {drink.name}
      </Text>
    </Box>
  );
};
