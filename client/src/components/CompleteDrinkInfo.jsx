import React from 'react';
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

const Image = styled.img`
  height: 300px;
  display: block;
  position: relative;
  cursor: pointer;
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


const CompleteDrinkInfo = function(props){
  return(
    <div>
      <h2>{props.selectedItem.strDrink}</h2>
      <Button onClick={props.renderDrinkList}>Return to Drink list</Button>
      <Button onClick={props.renderLanding}>Return to Ingredients</Button>

      <br />
      <Image src={props.selectedItem.strDrinkThumb} alt="Logo"/>
      <p>Instructions: {props.selectedItem.strInstructions}</p>
      <p>Ingredients:</p>
      <p>{props.selectedItem.strIngredient1}</p>
      <p>{props.selectedItem.strIngredient2}</p>
      <p>{props.selectedItem.strIngredient3}</p>
      <p>{props.selectedItem.strIngredient4}</p>
      <p>{props.selectedItem.strIngredient5}</p>
      <p>{props.selectedItem.strIngredient6}</p>
      {/* {console.log(props.selectedItem)} */}


      {/* {console.log(props.selectedItem)} */}
    </div>

  )
}

export default CompleteDrinkInfo;