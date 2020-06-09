const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { getAllDrinks, getAllIngredients, populateArrayWithDrinks, updateIngredients } = require('../database/index.js');




app.use(express.static(path.join(__dirname, '../client/dist')));

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




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))