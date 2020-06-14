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

const Div = styled.div`
margin: 20px;
`

const Navbar = styled.div`
  overflow: hidden;
  background-color: #F4DDD8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
`

const Main = styled.div`
  padding: 16px;
  margin: 40px;

  margin-top: 140px;
`

const Elements = styled.div`
// width: 50%;
// margin: 0 auto;
  margin-left: 40px
`


const CompleteDrinkInfo = function(props){
  let allSelectedIngredients = [];
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
  }
  return(
    <div>
      <Navbar>
        <Elements>
          <h1>Open Bar   -    {props.selectedItem.strDrink} ({props.selectedItem.strAlcoholic})</h1>
          <Button onClick={props.renderDrinkList}>Return to Drink list</Button>
          <Button onClick={props.renderLanding}>Return to Ingredients</Button>
          <Button onClick={props.findRandomDrink}>Random Drink</Button>
          <Button onClick={props.saveToMyFavorites}>Save To My Favorites</Button>
          <Button onClick={props.findMyFavorites}>My Favorites</Button>
        </Elements>
      </Navbar>

      <Main>
        <br />
        <Image src={props.selectedItem.strDrinkThumb} alt="Logo"/>
        <h4>Instructions: </h4>
        <ol>{props.selectedItem.strInstructions}</ol>
        <h4>Ingredients:</h4>

        {arrayOfObjs.map(ingredient => <CompleteDrinkIngredients ingredient={ingredient} allSelectedIngredients={allSelectedIngredients} />)}
      </Main>
    </div>
  )
}

export default CompleteDrinkInfo;