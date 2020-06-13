import React from 'react';
import styled from 'styled-components';
import Drink from './Drink.jsx';

const Button = styled.button`
  background: "white";
  color:  "white";

  font-size: 1em;
  margin: 20px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const DrinkList = function(props){
  console.log('PROPS IN DRINKLIST: ', props.listOfDrinks)

    if (props.listOfDrinks.length > 0 && props.listOfDrinks !== "None Found"){
      return(
        <div>

          <Button onClick={props.renderLanding}>Return to Ingredients</Button>

          {props.listOfDrinks.map(drink => <Drink drink={drink} renderCompleteDrinkInfo={props.renderCompleteDrinkInfo} key={drink.idDrink.toString()} />)}

        </div>
      )
    }
    else {
      return(
        <div>
          No Drinks
          <Button onClick={props.renderLanding}>Return to Ingredients</Button>
        </div>
      )

    }
}

export default DrinkList;

// key={props.listOfDrinks.idDrink}