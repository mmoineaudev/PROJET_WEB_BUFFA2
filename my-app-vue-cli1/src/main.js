import Vue from "vue";
import restaurant from "./restaurant";
import addrestaurant from "./addRestaurant";

//Composant restaurants, contient les différents restaurants
//import restaurant from "./restaurant";
//instance de vue principale
new Vue({
  //  return new Vue({
  el: "#main",
  components: { restaurant, addrestaurant },
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
    name: "",
    addId: "null value",
    addName: "null value",
    addCuisine: "null value"
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
    getRestaurantsFromServer() {
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
    },
    add() {
      console.log("aaaah");
    }
  }
});
