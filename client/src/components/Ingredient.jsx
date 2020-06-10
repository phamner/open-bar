import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background: ${props => props.trueOrFalse ? "palevioletred" : "white"};
  color: ${props => props.trueOrFalse ? "white" : "palevioletred"};

  font-size: 1.5em;
  margin: 0px;
  padding: 0.25em 1em;
  // border: 2px solid palevioletreds;
  border-radius: 3px;
`;

const Div = styled.div`
  margin: 5px;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
`

const Ul = styled.div`
  list-style-type: none;
  width: 500px;
`

const H3 = styled.div`
  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
`

const P = styled.div`
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
`

const Li = styled.div`
  padding: 3px;
  overflow: auto;
`

const Ingredient = function(props){
  return(

    <Div>
      <Ul>
        <Li>
          <Button trueOrFalse={props.trueFalse} onClick={props.addItemToBar} id={props.item}>{props.item} </Button>
        </Li>
      </Ul>
    </Div>

  )
}

export default Ingredient;