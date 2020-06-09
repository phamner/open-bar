import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 120px;

  display: block;
  position: relative;
  cursor: pointer;
  margin-bottom: 3px;
`;


const Drink = function(props){
  // console.log(props.drink.idDrink)
  return (
    <div>
      <h4>{props.drink.strDrink}</h4>
      <Image src={props.drink.strDrinkThumb} alt="Logo" id={props.drink.idDrink} onClick={props.renderCompleteDrinkInfo}/>
    </div>
  )
}

export default Drink;