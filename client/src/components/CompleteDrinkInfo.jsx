import React from 'react';
import styled from 'styled-components';
import CompleteDrinkIngredients from './CompleteDrinkIngredients.jsx';

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
  console.log('All ingredients IN COMPLETEDRINKINFO: ', props.allIngredients)
  let allSelectedIngredients = [];
  // let allIngredients = [];
  // let allQuantities = [];
  let arrayOfObjs = [];


  for (var key in props.allIngredients) {
    if (props.allIngredients[key] === true) {
      allSelectedIngredients.push(key)
    }
  }

  for (var i = 1; i < 16; i++){
    let tempObj = {}
    let number = 1;
    let currentIngredient = props.selectedItem[`strIngredient${i}`];
    let currentQuantity = props.selectedItem[`strMeasure${i}`];
    if (currentIngredient !== null) {
      tempObj['quantity'] = currentQuantity;
      tempObj['ingredient'] = currentIngredient;
      arrayOfObjs.push(tempObj)
    }
    // allIngredients.push(currentIngredient);
    // allQuantities.push(currentQuantity);
  }

  // console.log('all ingredients; ', allIngredients, 'all qquanitites: ', allQuantities)
  // console.log('DATA OBJECT: ', arrayOfObjs)
  // console.log('all selected ingredients', allSelectedIngredients)

  return(
    <Div>
      <h2>{props.selectedItem.strDrink} ({props.selectedItem.strAlcoholic})</h2>
      <Button onClick={props.renderDrinkList}>Return to Drink list</Button>
      <Button onClick={props.renderLanding}>Return to Ingredients</Button>
      <Button onClick={props.findRandomDrink}>Random Drink</Button>
      <Button onClick={props.saveToMyFavorites}>Save To My Favorites</Button>
      <Button onClick={props.findMyFavorites}>My Favorites</Button>


      {/* {strDrink: "3-Mile Long Island Iced Tea", strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg", idDrink: "15300"} */}


      <br />
      <Image src={props.selectedItem.strDrinkThumb} alt="Logo"/>
      <h4>Instructions: </h4>
      <ol>{props.selectedItem.strInstructions}</ol>
      <h4>Ingredients:</h4>

      {arrayOfObjs.map(ingredient => <CompleteDrinkIngredients ingredient={ingredient} allSelectedIngredients={allSelectedIngredients} />)}

    </Div>
  )
}

export default CompleteDrinkInfo;