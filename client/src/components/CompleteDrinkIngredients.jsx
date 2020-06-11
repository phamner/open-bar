import React from 'react';
import styled from 'styled-components';

const Button = styled.div`

background: ${props => props.ingredientsMatch ? "rgba(0,255,0,0.3)" : "rgba(255,0,0,0.3)"};
// color: ${props => props.ingredientsMatch ? "black" : "black"};

font-size: 1em;
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid grey;
border-radius: 3px;
width: 400px;
margin-left: 40px;
`;


const CompleteDrinkIngredients = function(props){
  let ingredientsAreMatching = false;

  // console.log('INGREDIENT SELECTED: ', props.allSelectedIngredients[0], 'singlular ingredient', props.ingredient.ingredient)

  for (var i = 0; i < props.allSelectedIngredients.length; i++) {
    if (props.ingredient.quantity !== undefined && props.allSelectedIngredients[i] === props.ingredient.ingredient) {
      ingredientsAreMatching = true;
      // props.allSelectedIngredients[i] === props.ingredient.ingredient);
    }
  }


  // }
  console.log(ingredientsAreMatching)

  return(
    <Button ingredientsMatch={ingredientsAreMatching}>{props.ingredient.ingredient}:   {props.ingredient.quantity}</Button>
  )
}

export default CompleteDrinkIngredients;