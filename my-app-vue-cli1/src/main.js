import Vue from "vue";
//Composant restaurants, contient les différents restaurants
//import restaurant from "./restaurant";
//instance de vue principale
new Vue({
  //  return new Vue({
  el: "#main",
  //components: restaurant,
  data: {
    restaurants: [
      {
        id: "ID",
        name: "café de Paris",
        cuisine: "Française"
      },
      {
        id: "ID",
        name: "Sun City Café",
        cuisine: "Américaine"
      }
    ],
    page: 0,
    nbPerPage: 5,
    name: ""
  },
  mounted() {
    console.log("mainView.mounted");
    this.getRestaurantsFromServer();
  },
  methods: {
    addRestaurant(event) {
      console.log("addRestaurant(" + event + ")");

      //event.preventDefault();

      let url = "http://127.0.0.1:8080/api/restaurants";
      fetch(url, {
        method: "POST",
        body: event
      })
        .then(responseJSON => {
          responseJSON.json().then(res => {
            // Maintenant res est un vrai objet JavaScript
            //afficheReponsePOST(res);
            console.log(res);
            this.getRestaurantsFromServeur();
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getRestaurantsFromServer: function() {
      console.log("getRestaurantsFromServer");
      let url =
        "http://localhost:8080/api/restaurants?page=" +
        this.page +
        "&pagesize=" +
        this.nbPerPage +
        "&name=" +
        this.name;
      console.log("getRestaurantsFromServeur : " + url);
      fetch(url)
        .then(repJSON => {
          return repJSON.json();
        })
        .then(repJS => {
          this.restaurants = repJS.data;
          console.log(this.restaurants);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});

//COMPONENTS

Vue.component("restaurant", {
  template: `
    <div class="item">
      <div class="content">
      <p class="ui green ribbon label">{{nom}}</p>
        <p class="ui tag label">Cuisine : {{cuisine}}</p> 
      </div>
      <hr>
    </div>  
  `,
  props: {
    id: { type: Number },
    cuisine: { type: String, defaut: "???" },
    nom: { type: String, defaut: "restaurant : ???" }
  },
  data() {
    return { id: this.localid, cuisine: this.localcuisine, nom: this.localnom };
  },
  name: "restaurant"
});

Vue.component("add-restaurant", {
  template: `
  <div class="ui raised segment">
    <p class="ui red ribbon label">Formulaire d'ajout</p>
    <form class="ui inverted segment" @submit="addRestaurant">
    <div class="ui inverted form">
      <div class="two fields">
        <div class="field">
          <label>Nom du restaurant</label>
          <input v-model="nomToAdd" placeholder="Nom du restaurant" type="text">
        </div>
        <div class="field">
          <label>Cuisine : </label>
          <input v-model="cuisineToAdd" placeholder="Indiquez un type de cuisine" type="text">
        </div>
      </div>
      <button class="ui submit button" @click.prevent="addRestaurant">Submit</button>
      </div>
      </form>
      <p> LOL {{cuisineToAdd}} {{nomToAdd}}</p>
  </div>

  `,
  data() {
    return {
      cuisineToAdd: "",
      nomToAdd: ""
    };
  },
  methods: {
    addRestaurant() {
      console.log("emit");
      this.$emit("addRestaurant", { nom: nomToAdd, cuisine: cuisineToAdd });
    }
  },
  name: "add-restaurant"
});
