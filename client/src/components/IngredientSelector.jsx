import React from 'react';

const IngredientSelector = function(){
  return(
    <div>
      <h3>hello from ingredient selector!</h3>

      <form>
        Filter: <input type="text" name="name" />
        <br />

        <label>
          Vodka:
          <input name="Vodka" type="checkbox"/>
          <br />

          Gin:
          <input name="Gin" type="checkbox"/>
          <br />

          Rum:
          <input name="Rum" type="checkbox"/>
          <br />

          Tequila:
          <input name="Tequila" type="checkbox"/>
          <br />

          Scotch:
          <input name="Scotch" type="checkbox"/>
          <br />

        </label>

      </form>
    </div>
  )
}

export default IngredientSelector;
