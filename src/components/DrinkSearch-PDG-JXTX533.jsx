import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList";
import { Text, Grid } from "@chakra-ui/react";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Text fontWeight={600} fontSize="lg" pb={[8, 0]}>
        Search for drinks:
      </Text>
      <TextInput changeFn={handleChange} w={[200, 500]} />
      <Grid
        templateRows={["repeat(6, 1fr)", "repeat(2, 1fr)"]}
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={"20px"}
        mt={["0px", 0]}
      >
        <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
      </Grid>
    </>
  );
};
