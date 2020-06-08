import React from 'react';
import Ingredient from './Ingredient.jsx';
import styled from 'styled-components';


const Button = styled.button`
  background: "white";
  color:  "white";

  font-size: 1em;
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



const IngredientSelector = function(props){
  const arrayOfIngredients = Object.keys(props.ingredients);
  // console.log(props)

  return(
    <div>
      <h3>Select the Ingredients in your Bar</h3>
      <Button>Save Your Ingredients</Button>
      <Button>Order Up!</Button>
      <form>
        Filter Ingredients: <input type="text" name="name" onChange={props.handleFilterChange}/>
      </form>
      <br />
      {console.log(props.ingredients.filterDrinks)}
      {/* {arrayOfIngredients.map(item => <Ingredient item={item} key={item} trueFalse={props.ingredients[item]} addItemToBar={props.addItemToBar}/>)} */}


      {arrayOfIngredients.filter(item =>
        item.toLowerCase().includes(props.ingredients.filterDrinks.toLowerCase()))
        .map(item => <Ingredient item={item} key={item} trueFalse={props.ingredients[item]} addItemToBar={props.addItemToBar}/>)}


{/* props.ingredients.filterDrinks.toLowerCase() */}

    </div>
  )
}

export default IngredientSelector;
