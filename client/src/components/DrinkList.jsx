import React from 'react';
import styled from 'styled-components';
import Drink from './Drink.jsx';

const Button = styled.button`
  background: "white";
  color:  "white";

  font-size: 1em;
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const DrinkList = function(props){
  // if (props.listOfDrinks.length > 0 ) {
    // let drinks = props.listOfDrinks;
    // console.log(drinks)

    // if (drinks.length === 0 || drinks === undefined) {
    //   return(
    //     <div>
    //     No drinks available, sorry!
    //     </div>
    //   )
    // } else {
      return(
        <div>

          <Button onClick={props.renderLanding}>Return to Ingredients</Button>
          {/* {console.log(props.listOfDrinks)} */}

          {/* MUST COME BACK AND FIX THE ASYNCROUNOUS ERROR HERE, MAYBE USING componentWillUnmount??? */}
          {props.listOfDrinks.map(drink => <Drink drink={drink} renderCompleteDrinkInfo={props.renderCompleteDrinkInfo} key={props.listOfDrinks.idDrink}/>)}

        </div>
      )
    // }
    }

export default DrinkList;