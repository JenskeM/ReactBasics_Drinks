import {Button} from './ui/Button'

export const DrinkChoice = ({ drink, clickReset}) => {
    return (
      <>
        <h2>Your choice: {drink.name}</h2>
        <img src={drink.imgUrl} height='100px' width='100px' alt={drink.alt}></img>
        <p>Just a second... Your {drink.name.toLowerCase()} will quickly be ready... </p>
        <Button text={'Sorry, changed my mind'} clickReset={clickReset} />
      </>
    );
};