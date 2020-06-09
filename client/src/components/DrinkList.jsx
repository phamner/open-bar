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
  return(
    <div>
      <h3>
        Drink list component!
      </h3>
      <Button onClick={props.renderLanding}>Return to Ingredients</Button>


      {/* MUST COME BACK AND FIX THE ASYNCROUNOUS ERROR HERE, MAYBE USING componentWillUnmount??? */}
      {/* {console.log('drinklist: ', props.listOfDrinks)} */}
      {/* {props.listOfDrinks.map(drink => <Drink drink={drink} renderCompleteDrinkInfo={props.renderCompleteDrinkInfo}/>)} */}

      <div>
        <img src={props.selectedItem.strDrinkThumb} alt="Logo" />
        <p>{props.selectedItem.strDrink}</p>
      </div>


    </div>
  )
}

export default DrinkList;