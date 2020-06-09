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

const CompleteDrinkInfo = function(props){
  return(
    <div>
      <h2>{props.selectedItem.strDrink}</h2>
      <Button onClick={props.renderDrinkList}>Return to Drink list</Button>
      <br />
      <img src={props.selectedItem.strDrinkThumb} alt="Logo" onClick={props.renderCompleteDrinkInfo}/>
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