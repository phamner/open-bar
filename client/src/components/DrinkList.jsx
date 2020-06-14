import React from 'react';
import styled from 'styled-components';
import Drink from './Drink.jsx';

const Button = styled.button`
  background: "white";
  color:  "white";
  font-size: 1em;
  margin: 20px;
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
  height: 150px;

`

// .navbar a:hover {
//   background: #ddd;
//   color: black;
// }

const Main = styled.div`
  padding: 16px;
  margin-top: 140px;
`

const Elements = styled.div`
// width: 50%;
// margin: 0 auto;
  margin-left: 40px
`


const DrinkList = function(props){
  console.log('PROPS IN DRINKLIST: ', props.listOfDrinks)

    if (props.listOfDrinks.length > 0 && props.listOfDrinks !== "None Found"){
      return(
        <div>
          <Navbar>
            <Elements>
              <h1>Open Bar</h1>
              <Button onClick={props.renderLanding}>Return to Ingredients</Button>
              <Button onClick={props.findMyFavorites}>My Favorites</Button>


            </Elements>
          </Navbar>

          <Main>
          {props.listOfDrinks.map(drink => <Drink drink={drink} renderCompleteDrinkInfo={props.renderCompleteDrinkInfo} key={drink.idDrink.toString()} />)}
          </Main>
        </div>
      )
    }
    else {
      return(
        <div>
          No Drinks
          <Button onClick={props.renderLanding}>Return to Ingredients</Button>
        </div>
      )

    }
}

export default DrinkList;

// key={props.listOfDrinks.idDrink}