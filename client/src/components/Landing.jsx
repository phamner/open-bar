import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IngredientSelector from './IngredientSelector.jsx';
import DrinkList from './DrinkList.jsx';
import Drink from './Drink.jsx';
import axios from 'axios';

// const incredients = require('../../../database/allIngredients')

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vodka: false,
      Gin: false,
      Rum: false,
      Tequila: false,
      Scotch: false,
      Absolut_Kurant: false,
      Absolut_Peppar: false,
      Absolut_Vodka: false,
      Advocaat: false,
      Aejo_Rum: false,
      Aftershock: false,
      Agave_Syrup: false,
      Ale: false,
      Allspice: false,
      Almond_Extract: false,
      Almond_Flavoring: false,
      Almond: false,
      Amaretto: false,
      Angelica_Root: false,
      Angostura_Bitters: false,
      Anis: false,
      Anise: false,
      Anisette: false,
      Aperol: false,
      Apfelkorn: false,
      Apple_Brandy: false,
      Apple_Cider: false,
      Apple_Juice: false,
      Apple_Schnapps: false,
      Apple: false,
      Applejack: false,
      Apricot_Brandy: false,
      Apricot_Nectar: false,
      Apricot: false,
      Aquavit: false,
      Asafoetida: false,
      Añejo_Rum: false,
      Bacardi_Limon: false,
      Bacardi: false,
      Baileys_Irish_Cream: false,
      Banana_Liqueur: false,
      Banana_Rum: false,
      Banana_Syrup: false,
      Banana: false,
      Barenjager: false,
      Basil: false,
      Beef_Stock: false,
      Beer: false,
      Benedictine: false,
      Berries: false,
      Bitter_lemon: false,
      Bitters: false,
      Black_Pepper: false,
      Black_Rum: false,
      Black_Sambuca: false,
      Blackberries: false,
      Blackberry_Brandy: false,
      Blackberry_Schnapps: false,
      Blackcurrant_Cordial: false,
      Blackcurrant_Schnapps: false,
      Blackcurrant_Squash: false,
      Blended_Whiskey: false,
      Blue_Curacao: false,
      Blue_Maui: false,
      Blueberries: false,
      Blueberry_Schnapps: false,
      Bourbon: false,
      Brandy: false,
      Brown_Sugar: false,
      Butter: false,
      Butterscotch_Schnapps: false,
      Cachaca: false,
      Calvados: false,
      Campari: false,
      Canadian_Whisky: false,
      Candy: false,
      Cantaloupe: false,
      Caramel_Coloring: false,
      Carbonated_Soft_Drink: false,
      Carbonated_Water: false,
      Cardamom: false,
      Cayenne_Pepper: false,
      Celery_Salt: false,
      Celery: false,
      Chambord_Raspberry_Liqueur: false,
      Champagne: false,
      Cherries: false,
      Cherry_Brandy: false,
      Cherry_Cola: false,
      Cherry_Grenadine: false,
      Cherry_Heering: false,
      Cherry_Juice: false,
      Cherry_Liqueur: false,
      Cherry: false,
      Chocolate_Ice_cream: false,   //Chocolate_Ice-cream
      Chocolate_Liqueur: false,
      Chocolate_Milk: false,
      Chocolate_Syrup: false,
      Chocolate: false,
      Cider: false,
      Cinnamon_Schnapps: false,
      Cinnamon: false,
      Citrus_Vodka: false,
      Clamato_Juice: false,
      Cloves: false,
      Club_Soda: false,
      Coca_Cola: false,  //Coca-Cola
      Cocktail_Onion: false,
      Cocoa_Powder: false,
      Coconut_Cream: false,
      Coconut_Liqueur: false,
      Coconut_Milk: false,
      Coconut_Rum: false,
      Coconut_Syrup: false,
      Coffee_Brandy: false,
      Coffee_Liqueur: false,
      Coffee: false,
      Cognac: false,
      Cointreau: false,
      Cola: false,
      Cold_Water: false,
      Condensed_Milk: false,
      Coriander: false,
      Corn_Syrup: false,
      Cornstarch: false,
      Corona: false,
      Cranberries: false,
      Cranberry_Juice: false,
      Cranberry_Liqueur: false,
      Cranberry_Vodka: false,
      Cream_of_Coconut: false,
      Cream_Sherry: false,
      Cream_Soda: false,
      Cream: false,
      Creme_De_Almond: false,
      Creme_De_Banane: false,
      Creme_De_Cacao: false,
      Creme_De_Cassis: false,
      Creme_De_Noyaux: false,
      Creme_Fraiche: false,
      Crown_Royal: false,
      Crystal_Light: false,
      Cucumber: false,
      Cumin_Powder: false,
      Cumin_Seed: false,
      Curacao: false,
      Cynar: false,
      Daiquiri_Mix: false,
      Dark_Chocolate: false,
      Dark_Creme_De_Cacao: false,
      Dark_Rum: false,
      Dark_Soy_Sauce: false,
      Demerara_Sugar: false,
      Dr_Pepper: false,  //Dr._Pepper
      Drambuie: false,
      Dried_Oregano: false,
      Dry_Vermouth: false,
      Dubonnet_Blanc: false,
      Dubonnet_Rouge: false,
      Egg_White: false,
      Egg_Yolk: false,
      Egg: false,
      Eggnog: false,
      Erin_Cream: false,
      Espresso: false,
      Everclear: false,
      Fanta: false,
      Fennel_Seeds: false,
      Firewater: false,
      Flaked_Almonds: false,
      Food_Coloring: false,
      Forbidden_Fruit: false,
      Frangelico: false,
      Fresca: false,
      Fresh_Basil: false,
      Fresh_Lemon_Juice: false,
      Fruit_Juice: false,
      Fruit_Punch: false,
      Fruit: false,
      Galliano: false,
      Garlic_Sauce: false,
      Gatorade: false,
      Ginger_Ale: false,
      Ginger_Beer: false,
      Ginger: false,
      Glycerine: false,
      Godiva_Liqueur: false,
      Gold_rum: false,
      Gold_Tequila: false,
      Goldschlager: false,
      Grain_Alcohol: false,
      Grand_Marnier: false,
      Granulated_Sugar: false,
      Grape_juice: false,
      Grape_soda: false,
      Grapefruit_Juice: false,
      Grapes: false,
      Green_Chartreuse: false,
      Green_Creme_de_Menthe: false,
      Green_Ginger_Wine: false,
      Green_Olives: false,
      Grenadine: false,
      Ground_Ginger: false,
      Guava_juice: false,
      Guinness_stout: false,
      Guinness: false,
      Half_and_half: false,  //Half-and-half
      Hawaiian_punch: false,
      Hazelnut_liqueur: false,
      Heavy_cream: false,
      Honey: false,
      Hooch: false,
      Hot_Chocolate: false,
      Hot_Damn: false,
      Hot_Sauce: false,
      Hpnotiq: false,
      Ice_Cream: false,  //Ice-Cream
      Ice: false,
      Iced_tea: false,
      Irish_cream: false,
      Irish_Whiskey: false,
      Jack_Daniels: false,
      Jello: false,
      Jelly: false,
      Jagermeister: false,
      Jim_Beam: false,
      Johnnie_Walker: false,
      Kahlua: false,
      Key_Largo_Schnapps: false,
      Kirschwasser: false,
      Kiwi_liqueur: false,
      Kiwi: false,
      Kool_Aid: false,  //Kool-Aid
      Kummel: false,
      Lager: false,
      Lemon_Juice: false,
      Lemon_Peel: false,
      Lemon_soda: false,
      Lemon_vodka: false,
      Lemon_lime_soda: false,  //Lemon-lime_soda
      lemon_lime: false,    //lemon-lime
      lemon: false,
      Lemonade: false,
      Licorice_Root: false,
      Light_Cream: false,
      Light_Rum: false,
      Lillet: false,
      Lime_juice_cordial: false,
      Lime_Juice: false,
      Lime_liqueur: false,
      Lime_Peel: false,
      Lime_vodka: false,
      Lime: false,
      Limeade: false,
      Madeira: false,
      Malibu_Rum: false,
      Mandarin: false,
      Mandarine_napoleon: false,
      Mango: false,
      Maple_syrup: false,
      Maraschino_cherry_juice: false,
      Maraschino_Cherry: false,
      Maraschino_Liqueur: false,
      Margarita_mix: false,
      Marjoram_leaves: false,
      Marshmallows: false,
      Maui: false,
      Melon_Liqueur: false,
      Melon_Vodka: false,
      Mezcal: false,
      Midori_Melon_Liqueur: false,
      Midori: false,
      Milk: false,
      Mint_syrup: false,
      Mint: false,
      Mountain_Dew: false,
      Nutmeg: false,
      Olive_Oil: false,
      Olive: false,
      Onion: false,
      Orange_Bitters: false,
      Orange_Curacao: false,
      Orange_Juice: false,
      Orange_liqueur: false,
      Orange_Peel: false,
      Orange_rum: false,
      Orange_Soda: false,
      Orange_spiral: false,
      Orange_vodka: false,
      Orange: false,
      Oreo_cookie: false,
      Orgeat_Syrup: false,
      Ouzo: false,
      Oyster_Sauce: false,
      Papaya_juice: false,
      Papaya: false,
      Parfait_amour: false,
      Passion_fruit_juice: false,
      Passion_fruit_syrup: false,
      Passoa: false,
      Peach_brandy: false,
      Peach_juice: false,
      Peach_liqueur: false,
      Peach_Nectar: false,
      Peach_Schnapps: false,
      Peach_Vodka: false,
      Peach: false,
      Peachtree_schnapps: false,
      Peanut_Oil: false,
      Pepper: false,
      Peppermint_extract: false,
      Peppermint_Schnapps: false,
      Pepsi_Cola: false,
      Pernod: false,
      Peychaud_bitters: false,
      Pina_colada_mix: false,
      Pineapple_Juice: false,
      Pineapple_rum: false,
      Pineapple_vodka: false,
      Pineapple_orange_banana_juice: false,   //Pineapple-orange-banana_juice
      Pineapple: false,
      Pink_lemonade: false,
      Pisang_Ambon: false,
      Pisco: false,
      Plain_Chocolate: false,
      Plain_Flour: false,
      Plums: false,
      Port: false,
      Powdered_Sugar: false,
      Purple_passion: false,
      Raisins: false,
      Raspberry_cordial: false,
      Raspberry_Jam: false,
      Raspberry_Juice: false,
      Raspberry_Liqueur: false,
      Raspberry_schnapps: false,
      Raspberry_syrup: false,
      Raspberry_Vodka: false,
      Red_Chile_Flakes: false,
      Red_Chili_Flakes: false,
      Red_Hot_Chili_Flakes: false,
      Red_Wine: false,
      Rhubarb: false,
      Ricard: false,
      Rock_Salt: false,
      Root_beer_schnapps: false,
      Root_beer: false,
      Roses_sweetened_lime_juice: false,
      Rosewater: false,
      Rumple_Minze: false,
      Rye_Whiskey: false,
      Sake: false,
      Salt: false,
      Sambuca: false,
      Sarsaparilla: false,
      Schnapps: false,
      Schweppes_Lemon: false,
      Schweppes_Russchian: false,
      Sherbet: false,
      Sherry: false,
      Sirup_of_roses: false,
      Sloe_Gin: false,
      Soda_Water: false,
      Sour_Apple_Pucker: false,
      Sour_Mix: false,
      Southern_Comfort: false,
      Soy_Milk: false,
      Soy_Sauce: false,
      Soya_Milk: false,
      Soya_Sauce: false,
      Spiced_Rum: false,
      Sprite: false,
      Squeezed_Orange: false,
      Squirt: false,
      Strawberries: false,
      Strawberry_juice: false,
      Strawberry_liqueur: false,
      Strawberry_Schnapps: false,
      Strawberry_syrup: false,
      Sugar_Syrup: false,
      Sugar: false,
      Sunny_delight: false,
      Surge: false,
      Swedish_punsch: false,
      Sweet_and_Sour: false,
      Sweet_Cream: false,
      Sweet_Vermouth: false,
      Tabasco_Sauce: false,
      Tang: false,
      Tawny_port: false,
      Tea: false,
      Tennessee_whiskey: false,
      Tequila_rose: false,
      Tia_Maria: false,
      Tomato_Juice: false,
      Tomato: false,
      Tonic_Water: false,
      Triple_Sec: false,
      Tropicana: false,
      Tuaca: false,
      Vanilla_extract: false,
      Vanilla_Ice_Cream: false,   //Vanilla_Ice-Cream
      Vanilla_liqueur: false,
      Vanilla_schnapps: false,
      Vanilla_syrup: false,
      Vanilla_vodka: false,
      Vanilla: false,
      Vermouth: false,
      Vinegar: false,
      Water: false,
      Watermelon_schnapps: false,
      Whipped_Cream: false,
      Whipping_Cream: false,
      White_chocolate_liqueur: false,
      White_Creme_de_Menthe: false,
      White_grape_juice: false,
      White_port: false,
      White_Rum: false,
      White_Vinegar: false,
      White_Wine: false,
      Wild_Turkey: false,
      Wildberry_schnapps: false,
      Wine: false,
      Worcestershire_Sauce: false,
      Wormwood: false,
      Yeast: false,
      Yellow_Chartreuse: false,
      Yoghurt: false,
      Yukon_Jack: false,
      Zima: false,
      Caramel_Sauce: false,
      Chocolate_Sauce: false,
      Lillet_Blanc: false,
      Peach_Bitters: false,
      Mini_snickers_bars: false,   //Mini-snickers_bars
      Prosecco: false,
      Salted_Chocolate: false,
      Martini_Rosso: false,
      Martini_Bianco: false,
      Martini_Extra_Dry: false,
      Fresh_Lime_Juice: false,
      Fresh_Mint: false,
      Rosemary: false,
      Habanero_Peppers: false,
      Ilegal_Joven_mezcal: false,
      Elderflower_cordial: false,
      Rosso_Vermouth: false,
      Creme_de_Violette: false,
      Cocchi_Americano: false,
      White_Vermouth: false,
      Dry_Curacao: false,
      Nocino: false,
      Averna: false,
      Ramazzotti: false,
      Fernet_Branca: false,   //Fernet-Branca
      Allspice_Dram: false,
      Falernum: false,
      Singani: false,
      Arrack: false,
      Blackstrap_rum: false,
      Ginger_Syrup: false,
      Honey_syrup: false,
      Blended_Scotch: false,
      Islay_single_malt_Scotch: false,
      One_Fifty_One_proof_rum: false,    //151_proof_rum
      Seven_up: false,   ///7-up
      Absinthe: false,
      Absolut_citron: false,
      Creme_de_Mure: false,
      Olive_Brine: false,
      Pineapple_Syrup: false,
      St_Germain: false,    //St._Germain
      Lavender: false,
      Whiskey: false,
      Whisky: false,
      filterDrinks: '',
      Page: 'Landing'
    };

    this.addItemToBar = this.addItemToBar.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.renderDrinkList = this.renderDrinkList.bind(this);
    this.renderLanding = this.renderLanding.bind(this);
    this.saveIngredients = this.saveIngredients.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);


  }

  componentDidMount(){
    axios.get('/ingredients')
    .then(response => {
      // handle success
      // console.log('hello on the front end, has loaded,')
      // this.setState({
      //   Vodka: true
      // })

      let ingredientsFromDB = response.data[0];

      for (let [key, value] of Object.entries(response.data[0])) {
        console.log(`${key}: ${value}`);
        this.setState({
          [key]: value
        });
      }

      // this.setState({
      //   [event.target.id]: !this.state[event.target.id]
      // });

    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });

  }

  addItemToBar(event){
    // console.log('ingredient is here: ', ingredient);
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    });
    // console.log(`The state of ${event.target.id} is ${this.state[event.target.id]}`)
  }

  renderDrinkList(){
    this.setState({
      Page: 'DrinkList'
    })
  }

  renderLanding(){
    this.setState({
      Page: 'Landing',
      filterDrinks: ''
    })
  }

  handleFilterChange(event){
    this.setState({
      filterDrinks: event.target.value
    })
    // this.props.onChange(event.target.value)
  }

  saveIngredients(){
    // console.log('saving your ingredients to db');
    axios.post('/ingredients', {
      ingredientData: this.state
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });

  }

  render() {
    if (this.state.Page === 'Landing') {
      return (
        <div>
          <h1>
            Welcome to Open Bar
          </h1>
          <IngredientSelector
            addItemToBar={this.addItemToBar}
            ingredients={this.state}
            handleFilterChange={this.handleFilterChange}
            renderDrinkList={this.renderDrinkList}
            saveIngredients={this.saveIngredients}/>
        </div>
      )
    } else if (this.state.Page === 'DrinkList') {
      return (
        <div>
          <h1>
            Welcome to Open Bar
          </h1>
          <DrinkList renderLanding={this.renderLanding} />
        </div>
      )
    }
  }
}












export default Landing;

