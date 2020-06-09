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


const DrinkList = function(props){
  return(
    <div>
      <h3>
        Drink list component!
      </h3>
      <Button onClick={props.renderLanding}>Return to Ingredients</Button>
    </div>
  )
}

export default DrinkList;