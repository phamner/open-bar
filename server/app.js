const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const { getAllDrinks, getAllIngredients, populateArrayWithDrinks, updateIngredients } = require('../database/index.js');




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

 app.post('/ingredients', function (req, res) {
   res.send('POST request to the server');
   let state = req.body;
  //  state['filterDrinks'] = undefined;
  //  delete state.Page;

  //  console.log(state);
   updateIngredients(state)
 })




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))