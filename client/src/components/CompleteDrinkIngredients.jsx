import React from 'react';
import styled from 'styled-components';

const CompleteDrinkIngredients = function(props){
  // {console.log('COPLETE DRINK INGREDIENT INFO: ',   props.ingredient)}
  return(
    <ol>{props.ingredient.ingredient}:   {props.ingredient.quantity}</ol>
  )
}

export default CompleteDrinkIngredients;