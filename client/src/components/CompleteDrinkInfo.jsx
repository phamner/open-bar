import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: "white";
  color:  "white";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 3px;
`;

const Image = styled.img`
  height: 300px;
  display: block;
  position: relative;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 3px;
`;

// const Ingredient = styled.button`
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const Div = styled.div`
margin: 20px;
`


const CompleteDrinkInfo = function(props){
  console.log('DATA WE ARE GETTING IN COMPLETEDRINKINFO: ', props.selectedItem.strAlcoholic)
  return(
    <Div>
      <h2>{props.selectedItem.strDrink} ({props.selectedItem.strAlcoholic})</h2>
      <Button onClick={props.renderDrinkList}>Return to Drink list</Button>
      <Button onClick={props.renderLanding}>Return to Ingredients</Button>
      <Button onClick={props.findRandomDrink}>Random Drink</Button>

      <br />
      <Image src={props.selectedItem.strDrinkThumb} alt="Logo"/>
      <h4>Instructions: </h4>
      <ol>{props.selectedItem.strInstructions}</ol>
      <h4>Ingredients:</h4>
      <ol>{props.selectedItem.strIngredient1}</ol>
      <ol>{props.selectedItem.strIngredient2}</ol>
      <ol>{props.selectedItem.strIngredient3}</ol>
      <ol>{props.selectedItem.strIngredient4}</ol>
      <ol>{props.selectedItem.strIngredient5}</ol>
      <ol>{props.selectedItem.strIngredient6}</ol>
    </Div>
  )
}

export default CompleteDrinkInfo;