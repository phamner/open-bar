import React from 'react';

const Ingredient = function(props){
  return(
    <div>
      <div onClick={props.addItemToBar} id={props.item}>{props.item}</div>
      {/* {console.log(props.item)} */}
    </div>
  )
}

export default Ingredient;