import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.trueOrFalse ? "palevioletred" : "white"};
  color: ${props => props.trueOrFalse ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Ingredient = function(props){
  return(
    <div>
      <Button trueOrFalse={props.trueFalse} onClick={props.addItemToBar} id={props.item}>{props.item}</Button>
      {/* {console.log(props.trueFalse)} */}
    </div>
  )
}

export default Ingredient;