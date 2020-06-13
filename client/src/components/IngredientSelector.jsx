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

const Navbar = styled.div`
  overflow: hidden;
  background-color: #F4DDD8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

// const A = styled.div`
//   float: left;
//   display: block;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// `

// .navbar a:hover {
//   background: #ddd;
//   color: black;
// }

const Main = styled.div`
  padding: 16px;
  margin-top: 140px;
`

const Filter = styled.div`
  margin: 5px;
`

const Elements = styled.div`
// width: 50%;
// margin: 0 auto;
  margin-left: 40px
`



const IngredientSelector = function(props){
  const arrayOfIngredients = Object.keys(props.ingredients);

  return(
    <div>
      <Navbar>
        <Elements>
          <h1>Open Bar</h1>
          <Button onClick={props.saveIngredients}>Save Your Ingredients</Button>
          <Button onClick={props.clearIngredients}>Clear Ingredients</Button>
          <Button onClick={props.renderDrinkList}>Order Up!</Button>
          <Button onClick={props.findRandomDrink}>Random Drink</Button>
          <Button onClick={props.findTopCocktails}>Classic Drinks</Button>
          <Button onClick={props.findMyFavorites}>My Favorites</Button>

          <Filter>
            <form>
              Filter Ingredients ({props.ingredients.ingredientCounter} currently selected): <input type="text" name="name" onChange={props.handleFilterChange}/>
            </form>
          </Filter>
        </Elements>
      </Navbar>

      <Main>
        {arrayOfIngredients.filter(item =>
          item.toLowerCase().includes(props.ingredients.filterDrinks.toLowerCase()))
          .map(item => <Ingredient item={item} key={item} trueFalse={props.ingredients[item]} addItemToBar={props.addItemToBar}/>)}
      </Main>
    </div>
  )
}

export default IngredientSelector;
