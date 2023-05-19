import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading, Grid } from "@chakra-ui/react";

export const App = () => {
  const greeting = "Welcome you all";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <Grid alignItems={"center"} justifyItems="center">
          <Heading mb={8} mt={20} fontSize="3xl" color="blue.400">
            {greeting}
          </Heading>{" "}
          {/*mb={8} = marginBottom='2rem' */}
          <DrinkSearch clickFn={setUserDrink} />
        </Grid>
      )}
    </div>
  );
};

// export const App = () => {
//   const greeting = "Welcome you all";
//   const [userDrink, setUserDrink] = useState();

//   return (
//     <div className="app">
//       {userDrink ? (
//           <DrinkChoice drink={userDrink} clickFn={setUserDrink} />

//     ) : (
//         <>
//           <h1>{greeting}</h1>
//           <DrinkSearch clickFn={setUserDrink}/>
//         </>
//     )}
//     </div>
//   );
// };

// export const App = () => {
//   const greeting = "Welcome you all";
//   const [userDrink, setUserDrink] = useState();

//   return (
//     <div className="app">
//       {userDrink ? (
//           <DrinkChoice drink={userDrink} />

//     ) : (
//       <>
//           <h1>{greeting}</h1>
//           <DrinkButton drinkOne={tea.name} drinkTwo={coffee.name} />
//         </>
//     )}
//     </div>
//   );
// };

// export const App = () => {
//   const greeting = "Welcome you all";
//   const userDrink = undefined

//   return (
//     <div className="app">
//       {userDrink ? (
//           <DrinkChoice drink={userDrink} />

//     ) : (
//       <>
//           <h1>{greeting}</h1>
//           <DrinkButton drinkOne={tea.name} drinkTwo={coffee.name} />
//         </>
//     )}
//     </div>
//   );
// };

// export const App = () => {
//   const greeting = "Welcome you all";
//   const userDrink = tea

//   return (
//     <div className="app">
//       {userDrink && <h1>{greeting}</h1>}
//       <DrinkButton drinkOne={tea.name} drinkTwo={coffee.name} />
//       {userDrink && <DrinkChoice drink={userDrink} />}
//     </div>
//   );
// };
