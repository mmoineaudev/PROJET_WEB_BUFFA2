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
  // data: {
  //   localid: { type: Number, default: id },
  //   localcuisine: { type: String, defaut: cuisine },
  //   localnom: { type: String, defaut: nom }
  // },
  props: {
    id: { type: Number },
    cuisine: { type: String, defaut: "???" },
    nom: { type: String, defaut: "restaurant : ???" }
  },
  mounted() {
    /*this.localcuisine = this.cuisine;
    this.localid = this.id;
    this.localnom = this.nom;*/
    console.log(
      "mounted restaurant : " +
        this.localcuisine +
        "; " +
        this.localid +
        "; " +
        this.localnom
    );
  },
  data() {
    return { id: this.localid, cuisine: this.localcuisine, nom: this.localnom };
  },
  name: "restaurant"
});
