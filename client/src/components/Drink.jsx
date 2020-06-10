import React from 'react';
import styled from 'styled-components';

// const Image = styled.img`
  // height: 120px;

//   display: block;
//   position: relative;
//   cursor: pointer;
//   margin-bottom: 3px;
// `;

const Div = styled.div`
  margin: 20px;

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

const Img = styled.div`
  float: left;
  margin: 0 15px 0 0;
`

const P = styled.div`
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
`

const Li = styled.div`
  padding: 10px;
  overflow: auto;
`

// li:hover {
//   background: #eee;
//   cursor: pointer;
// }

const Image = styled.img`
  float: left;
  margin: 0 15px 0 0;
  height: 120px;

`;


const Drink = function(props){
  // console.log(props.drink.idDrink)
  return (
    <Div>
      <Ul>
        <Li>
          <Image src={props.drink.strDrinkThumb} alt="Logo" id={props.drink.idDrink} onClick={() => {props.renderCompleteDrinkInfo(props.drink.idDrink)}}/>
          <H3>{props.drink.strDrink}</H3>
        </Li>
      </Ul>
    </Div>
  )
}

export default Drink;