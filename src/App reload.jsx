import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";


export const App = () => {
  const greeting = "Welcome you all";
  const [userDrink, setUserDrink] = useState();

  function refreshPage() {
    window.location.reload(false);
  }
  

  return (
    <div className="app">
      {userDrink ? (
          <DrinkChoice drink={userDrink} clickReset={refreshPage} />
        
    ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink}/>
        </>
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
