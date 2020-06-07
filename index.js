const { drinks } = require('./allDrinks.js');
const request = require('request');
const Promise = require('promise');

let arrayOfDrinks = [];
// drinks.length



// var promise = new Promise(function (resolve, reject) {
//   get('http://www.google.com', function (err, res) {
//     if (err) reject(err);
//     else resolve(res);
//   });
// });


const populateArrayWithDrinks = function(){
  for (var i = 0; i < 10; i++) {
    let drinkID = drinks[i].idDrink;

    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`, function (error, response, body) {
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // arrayOfDrinks.push(body); // Print the HTML for the Google homepage.
      // console.log(body)
      let json = JSON.parse(body);
      arrayOfDrinks.push(json.drinks[0])
      // console.log(json.drinks[0])
    });
  }
}


// populateArrayWithDrinks();
populateArrayWithDrinks()
.then(function() {
  console.log(arrayOfDrinks);
})

