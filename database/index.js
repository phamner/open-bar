const { drinks } = require('./allDrinks.js');
const request = require('request');

//Mongoose:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testkittiesbeforedrinks', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
  let drinkCounter = 0;
  var drinkSchema = new mongoose.Schema({
    idDrink: String,
    strDrink: String,
    strDrinkAlternate: String,
    strDrinkES: String,
    strDrinkDE: String,
    strDrinkFR: String,
    'strDrinkZH-HANS': String,
    'strDrinkZH-HANT': String,
    strTags: String,
    strVideo: String,
    strCategory: String,
    strIBA: String,
    strAlcoholic: String,
    strGlass: String,
    strInstructions: String,
    strInstructionsES: String,
    strInstructionsDE: String,
    strInstructionsFR: String,
    'strInstructionsZH-HANS': String,
    'strInstructionsZH-HANT': String,
    strDrinkThumb: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strIngredient11: String,
    strIngredient12: String,
    strIngredient13: String,
    strIngredient14: String,
    strIngredient15: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strMeasure7: String,
    strMeasure8: String,
    strMeasure9: String,
    strMeasure10: String,
    strMeasure11: String,
    strMeasure12: String,
    strMeasure13: String,
    strMeasure14: String,
    strMeasure15: String,
    strCreativeCommonsConfirmed: String,
    dateModified: String
  });
  var Drink = mongoose.model('Drink', drinkSchema);

  const populateArrayWithDrinks = function(){
    for (var i = 0; i < drinks.length; i++) {
      let drinkID = drinks[i].idDrink;

      request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`, function (error, response, body) {
        // console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // arrayOfDrinks.push(body); // Print the HTML for the Google homepage.

        let json = JSON.parse(body);
        let drinkObj = json.drinks[0]
        var currentDrink = new Drink(drinkObj);

        currentDrink.save(function (err, currentDrink) {
          if (err){
            console.log(err)
          }
          else {
            console.log(`success in logging ${drinkID} to mongo`)
          }
        });
      });
    }
  }
  populateArrayWithDrinks();
});