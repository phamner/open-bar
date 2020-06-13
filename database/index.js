// const { drinks } = require('./allDrinks.js');
const request = require('request');

//Mongoose:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/openbar', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');

});

var ingredientSchema = new mongoose.Schema({
  Vodka: String,
  Gin: String,
  Rum: String,
  Tequila: String,
  Scotch: String,
  Absolut_Kurant: String,
  Absolut_Peppar: String,
  Absolut_Vodka: String,
  Advocaat: String,
  Aejo_Rum: String,
  Aftershock: String,
  Agave_Syrup: String,
  Ale: String,
  Allspice: String,
  Almond_Extract: String,
  Almond_Flavoring: String,
  Almond: String,
  Amaretto: String,
  Angelica_Root: String,
  Angostura_Bitters: String,
  Anis: String,
  Anise: String,
  Anisette: String,
  Aperol: String,
  Apfelkorn: String,
  Apple_Brandy: String,
  Apple_Cider: String,
  Apple_Juice: String,
  Apple_Schnapps: String,
  Apple: String,
  Applejack: String,
  Apricot_Brandy: String,
  Apricot_Nectar: String,
  Apricot: String,
  Aquavit: String,
  Asafoetida: String,
  Añejo_Rum: String,
  Bacardi_Limon: String,
  Bacardi: String,
  Baileys_Irish_Cream: String,
  Banana_Liqueur: String,
  Banana_Rum: String,
  Banana_Syrup: String,
  Banana: String,
  Barenjager: String,
  Basil: String,
  Beef_Stock: String,
  Beer: String,
  Benedictine: String,
  Berries: String,
  Bitter_lemon: String,
  Bitters: String,
  Black_Pepper: String,
  Black_Rum: String,
  Black_Sambuca: String,
  Blackberries: String,
  Blackberry_Brandy: String,
  Blackberry_Schnapps: String,
  Blackcurrant_Cordial: String,
  Blackcurrant_Schnapps: String,
  Blackcurrant_Squash: String,
  Blended_Whiskey: String,
  Blue_Curacao: String,
  Blue_Maui: String,
  Blueberries: String,
  Blueberry_Schnapps: String,
  Bourbon: String,
  Brandy: String,
  Brown_Sugar: String,
  Butter: String,
  Butterscotch_Schnapps: String,
  Cachaca: String,
  Calvados: String,
  Campari: String,
  Canadian_Whisky: String,
  Candy: String,
  Cantaloupe: String,
  Caramel_Coloring: String,
  Carbonated_Soft_Drink: String,
  Carbonated_Water: String,
  Cardamom: String,
  Cayenne_Pepper: String,
  Celery_Salt: String,
  Celery: String,
  Chambord_Raspberry_Liqueur: String,
  Champagne: String,
  Cherries: String,
  Cherry_Brandy: String,
  Cherry_Cola: String,
  Cherry_Grenadine: String,
  Cherry_Heering: String,
  Cherry_Juice: String,
  Cherry_Liqueur: String,
  Cherry: String,
  Chocolate_Ice_cream: String,
  Chocolate_Liqueur: String,
  Chocolate_Milk: String,
  Chocolate_Syrup: String,
  Chocolate: String,
  Cider: String,
  Cinnamon_Schnapps: String,
  Cinnamon: String,
  Citrus_Vodka: String,
  Clamato_Juice: String,
  Cloves: String,
  Club_Soda: String,
  Coca_Cola: String,
  Cocktail_Onion: String,
  Cocoa_Powder: String,
  Coconut_Cream: String,
  Coconut_Liqueur: String,
  Coconut_Milk: String,
  Coconut_Rum: String,
  Coconut_Syrup: String,
  Coffee_Brandy: String,
  Coffee_Liqueur: String,
  Coffee: String,
  Cognac: String,
  Cointreau: String,
  Cola: String,
  Cold_Water: String,
  Condensed_Milk: String,
  Coriander: String,
  Corn_Syrup: String,
  Cornstarch: String,
  Corona: String,
  Cranberries: String,
  Cranberry_Juice: String,
  Cranberry_Liqueur: String,
  Cranberry_Vodka: String,
  Cream_of_Coconut: String,
  Cream_Sherry: String,
  Cream_Soda: String,
  Cream: String,
  Creme_De_Almond: String,
  Creme_De_Banane: String,
  Creme_De_Cacao: String,
  Creme_De_Cassis: String,
  Creme_De_Noyaux: String,
  Creme_Fraiche: String,
  Crown_Royal: String,
  Crystal_Light: String,
  Cucumber: String,
  Cumin_Powder: String,
  Cumin_Seed: String,
  Curacao: String,
  Cynar: String,
  Daiquiri_Mix: String,
  Dark_Chocolate: String,
  Dark_Creme_De_Cacao: String,
  Dark_Rum: String,
  Dark_Soy_Sauce: String,
  Demerara_Sugar: String,
  Dr_Pepper: String,
  Drambuie: String,
  Dried_Oregano: String,
  Dry_Vermouth: String,
  Dubonnet_Blanc: String,
  Dubonnet_Rouge: String,
  Egg_White: String,
  Egg_Yolk: String,
  Egg: String,
  Eggnog: String,
  Erin_Cream: String,
  Espresso: String,
  Everclear: String,
  Fanta: String,
  Fennel_Seeds: String,
  Firewater: String,
  Flaked_Almonds: String,
  Food_Coloring: String,
  Forbidden_Fruit: String,
  Frangelico: String,
  Fresca: String,
  Fresh_Basil: String,
  Fresh_Lemon_Juice: String,
  Fruit_Juice: String,
  Fruit_Punch: String,
  Fruit: String,
  Galliano: String,
  Garlic_Sauce: String,
  Gatorade: String,
  Ginger_Ale: String,
  Ginger_Beer: String,
  Ginger: String,
  Glycerine: String,
  Godiva_Liqueur: String,
  Gold_rum: String,
  Gold_Tequila: String,
  Goldschlager: String,
  Grain_Alcohol: String,
  Grand_Marnier: String,
  Granulated_Sugar: String,
  Grape_juice: String,
  Grape_soda: String,
  Grapefruit_Juice: String,
  Grapes: String,
  Green_Chartreuse: String,
  Green_Creme_de_Menthe: String,
  Green_Ginger_Wine: String,
  Green_Olives: String,
  Grenadine: String,
  Ground_Ginger: String,
  Guava_juice: String,
  Guinness_stout: String,
  Guinness: String,
  Half_and_half: String,
  Hawaiian_punch: String,
  Hazelnut_liqueur: String,
  Heavy_cream: String,
  Honey: String,
  Hooch: String,
  Hot_Chocolate: String,
  Hot_Damn: String,
  Hot_Sauce: String,
  Hpnotiq: String,
  Ice_Cream: String,
  Ice: String,
  Iced_tea: String,
  Irish_cream: String,
  Irish_Whiskey: String,
  Jack_Daniels: String,
  Jello: String,
  Jelly: String,
  Jagermeister: String,
  Jim_Beam: String,
  Johnnie_Walker: String,
  Kahlua: String,
  Key_Largo_Schnapps: String,
  Kirschwasser: String,
  Kiwi_liqueur: String,
  Kiwi: String,
  Kool_Aid: String,
  Kummel: String,
  Lager: String,
  Lemon_Juice: String,
  Lemon_Peel: String,
  Lemon_soda: String,
  Lemon_vodka: String,
  Lemon_lime_soda: String,
  lemon_lime: String,
  lemon: String,
  Lemonade: String,
  Licorice_Root: String,
  Light_Cream: String,
  Light_Rum: String,
  Lillet: String,
  Lime_juice_cordial: String,
  Lime_Juice: String,
  Lime_liqueur: String,
  Lime_Peel: String,
  Lime_vodka: String,
  Lime: String,
  Limeade: String,
  Madeira: String,
  Malibu_Rum: String,
  Mandarin: String,
  Mandarine_napoleon: String,
  Mango: String,
  Maple_syrup: String,
  Maraschino_cherry_juice: String,
  Maraschino_Cherry: String,
  Maraschino_Liqueur: String,
  Margarita_mix: String,
  Marjoram_leaves: String,
  Marshmallows: String,
  Maui: String,
  Melon_Liqueur: String,
  Melon_Vodka: String,
  Mezcal: String,
  Midori_Melon_Liqueur: String,
  Midori: String,
  Milk: String,
  Mint_syrup: String,
  Mint: String,
  Mountain_Dew: String,
  Nutmeg: String,
  Olive_Oil: String,
  Olive: String,
  Onion: String,
  Orange_Bitters: String,
  Orange_Curacao: String,
  Orange_Juice: String,
  Orange_liqueur: String,
  Orange_Peel: String,
  Orange_rum: String,
  Orange_Soda: String,
  Orange_spiral: String,
  Orange_vodka: String,
  Orange: String,
  Oreo_cookie: String,
  Orgeat_Syrup: String,
  Ouzo: String,
  Oyster_Sauce: String,
  Papaya_juice: String,
  Papaya: String,
  Parfait_amour: String,
  Passion_fruit_juice: String,
  Passion_fruit_syrup: String,
  Passoa: String,
  Peach_brandy: String,
  Peach_juice: String,
  Peach_liqueur: String,
  Peach_Nectar: String,
  Peach_Schnapps: String,
  Peach_Vodka: String,
  Peach: String,
  Peachtree_schnapps: String,
  Peanut_Oil: String,
  Pepper: String,
  Peppermint_extract: String,
  Peppermint_Schnapps: String,
  Pepsi_Cola: String,
  Pernod: String,
  Peychaud_bitters: String,
  Pina_colada_mix: String,
  Pineapple_Juice: String,
  Pineapple_rum: String,
  Pineapple_vodka: String,
  Pineapple_orange_banana_juice: String,
  Pineapple: String,
  Pink_lemonade: String,
  Pisang_Ambon: String,
  Pisco: String,
  Plain_Chocolate: String,
  Plain_Flour: String,
  Plums: String,
  Port: String,
  Powdered_Sugar: String,
  Purple_passion: String,
  Raisins: String,
  Raspberry_cordial: String,
  Raspberry_Jam: String,
  Raspberry_Juice: String,
  Raspberry_Liqueur: String,
  Raspberry_schnapps: String,
  Raspberry_syrup: String,
  Raspberry_Vodka: String,
  Red_Chile_Flakes: String,
  Red_Chili_Flakes: String,
  Red_Hot_Chili_Flakes: String,
  Red_Wine: String,
  Rhubarb: String,
  Ricard: String,
  Rock_Salt: String,
  Root_beer_schnapps: String,
  Root_beer: String,
  Roses_sweetened_lime_juice: String,
  Rosewater: String,
  Rumple_Minze: String,
  Rye_Whiskey: String,
  Sake: String,
  Salt: String,
  Sambuca: String,
  Sarsaparilla: String,
  Schnapps: String,
  Schweppes_Lemon: String,
  Schweppes_Russchian: String,
  Sherbet: String,
  Sherry: String,
  Sirup_of_roses: String,
  Sloe_Gin: String,
  Soda_Water: String,
  Sour_Apple_Pucker: String,
  Sour_Mix: String,
  Southern_Comfort: String,
  Soy_Milk: String,
  Soy_Sauce: String,
  Soya_Milk: String,
  Soya_Sauce: String,
  Spiced_Rum: String,
  Sprite: String,
  Squeezed_Orange: String,
  Squirt: String,
  Strawberries: String,
  Strawberry_juice: String,
  Strawberry_liqueur: String,
  Strawberry_Schnapps: String,
  Strawberry_syrup: String,
  Sugar_Syrup: String,
  Sugar: String,
  Sunny_delight: String,
  Surge: String,
  Swedish_punsch: String,
  Sweet_and_Sour: String,
  Sweet_Cream: String,
  Sweet_Vermouth: String,
  Tabasco_Sauce: String,
  Tang: String,
  Tawny_port: String,
  Tea: String,
  Tennessee_whiskey: String,
  Tequila_rose: String,
  Tia_Maria: String,
  Tomato_Juice: String,
  Tomato: String,
  Tonic_Water: String,
  Triple_Sec: String,
  Tropicana: String,
  Tuaca: String,
  Vanilla_extract: String,
  Vanilla_Ice_Cream: String,
  Vanilla_liqueur: String,
  Vanilla_schnapps: String,
  Vanilla_syrup: String,
  Vanilla_vodka: String,
  Vanilla: String,
  Vermouth: String,
  Vinegar: String,
  Water: String,
  Watermelon_schnapps: String,
  Whipped_Cream: String,
  Whipping_Cream: String,
  White_chocolate_liqueur: String,
  White_Creme_de_Menthe: String,
  White_grape_juice: String,
  White_port: String,
  White_Rum: String,
  White_Vinegar: String,
  White_Wine: String,
  Wild_Turkey: String,
  Wildberry_schnapps: String,
  Wine: String,
  Worcestershire_Sauce: String,
  Wormwood: String,
  Yeast: String,
  Yellow_Chartreuse: String,
  Yoghurt: String,
  Yukon_Jack: String,
  Zima: String,
  Caramel_Sauce: String,
  Chocolate_Sauce: String,
  Lillet_Blanc: String,
  Peach_Bitters: String,
  Mini_snickers_bars: String,
  Prosecco: String,
  Salted_Chocolate: String,
  Martini_Rosso: String,
  Martini_Bianco: String,
  Martini_Extra_Dry: String,
  Fresh_Lime_Juice: String,
  Fresh_Mint: String,
  Rosemary: String,
  Habanero_Peppers: String,
  Ilegal_Joven_mezcal: String,
  Elderflower_cordial: String,
  Rosso_Vermouth: String,
  Creme_de_Violette: String,
  Cocchi_Americano: String,
  White_Vermouth: String,
  Dry_Curacao: String,
  Nocino: String,
  Averna: String,
  Ramazzotti: String,
  Fernet_Branca: String,
  Allspice_Dram: String,
  Falernum: String,
  Singani: String,
  Arrack: String,
  Blackstrap_rum: String,
  Ginger_Syrup: String,
  Honey_syrup: String,
  Blended_Scotch: String,
  Islay_single_malt_Scotch: String,
  One_Fifty_One_proof_rum: String,
  Seven_up: String,
  Absinthe: String,
  Absolut_citron: String,
  Creme_de_Mure: String,
  Olive_Brine: String,
  Pineapple_Syrup: String,
  St_Germain: String,
  Lavender: String,
  Whiskey: String,
  Whisky: String
})
var Ingredient = mongoose.model('Ingredient', ingredientSchema);

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

var saveDrinkSchema = new mongoose.Schema({
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

var saveDrink = mongoose.model('saveDrink', saveDrinkSchema);

module.exports = {
  populateArrayWithDrinks: () => {
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
            console.log(`success in logging to mongo`)
          }
        });
      });
    }
  },
  getAllDrinks: (callback) => {
    Drink.find({}, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        callback(docs)
      }
    })
  },
  updateIngredients: (data) => {
    var currentIngredients = new Ingredient(data.ingredientData);

    console.log("data in the db", data.ingredientData)

    //NOTE: this might only work if there is a record in the db.  Potential for this to stiop working if the existing data is dropped.
    Ingredient.deleteOne({ }, function (err) {
      if (err) {
        console.log('Delete error: ', err);
      } else {
        currentIngredients.save(function (err, currentDrink) {
          if (err){
            console.log('Add error: ', err)
          }
          else {
            console.log(`success in deleting and adding ingredients to db`)
          }
        })
      }
    });
  },
  getAllIngredients: (callback) => {
    Ingredient.find({}, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        callback(docs)
      }
    })
  },
  addFavorite: (favDrink) => {

    // saveDrink.find({}, function (err, docs) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(docs)
    //   }
    // })


    var currentDrink = new saveDrink(favDrink);

    currentDrink.save(function (err, currentDrink) {
      if (err){
        console.log(err)
      }
      else {
        console.log(`success in checking database and logging the saved drink to mongo`)
      }
    })
  },
  getFavorites: (callback) => {
    saveDrink.find({}, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        callback(docs)
      }
    })

  }


}

// "idDrink" : "178319"


// module.exports.addFavorite()

// module.exports.getFavorites()







    // saveDrink.find({"idDrink" : "178319"}, function (err, doc) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     if (doc.length === 0 || doc === undefined) {
    //       console.log('no doc: ', doc)
    //     } else {
    //       console.log('we got a doc: ', doc)
    //       // currentDrink.save(function (err, currentDrink) {
    //       //   if (err){
    //       //     console.log(err)
    //       //   }
    //       //   else {
    //       //     console.log(`success in checking database and logging the saved drink to mongo`)
    //       //   }
    //       // })
    //     }
    //   }
    // })