const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const { getAllDrinks, getAllIngredients, populateArrayWithDrinks, updateIngredients, addFavorite, getFavorites } = require('../database/index.js');




app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/drinks', function (req, res) {
  getAllDrinks((data) => {
    res.send(data);
  });
 })

app.get('/ingredients', function (req, res) {
  getAllIngredients((data) => {
    res.send(data);
  });
})

app.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dry_Vermouth`, function (req, res) {
  res.send(res)
})

app.post('/ingredients', function (req, res) {
  res.send('POST request to the server');
  let state = req.body;
  updateIngredients(state)
})

app.post('/favorites', function (req, res) {
  res.send(req.body);
  let favDrink = req.body;
  // console.log('drink info that appears in the server: ', favDrink)

  addFavorite(favDrink)
})

// app.get('/favorites', function (req, res) {
//   getFavorites((data) => {
//     res.send(data);
//   })
// }

app.get('/favorites', function (req, res) {
  getFavorites((data) => {
    res.send(data);
  });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))