import React from 'react';
import Ingredient from './Ingredient.jsx';

const IngredientSelector = function(props){
  const arrayOfIngredients = Object.keys(props.incredients);
  return(
    <div>
      <h3>Select the Ingredients in your Bar</h3>
      <form>
        Filter: <input type="text" name="name" />
      </form>
      <br />
      {console.log(arrayOfIngredients)}
      {arrayOfIngredients.map(item => <Ingredient item={item} key={item} addItemToBar={props.addItemToBar}/>)}

    </div>
  )
}

export default IngredientSelector;
