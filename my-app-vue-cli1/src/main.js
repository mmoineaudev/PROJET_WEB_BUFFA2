import Vue from "vue";
import restaurant from "./restaurant";
import addrestaurant from "./addRestaurant";
import pager from "./pager";

//Composant restaurants, contient les différents restaurants
//import restaurant from "./restaurant";
//instance de vue principale

new Vue({
  //  return new Vue({
  el: "#main",
  components: { restaurant, addrestaurant, pager },
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
    addRestaurant($event) {
      console.log(
        JSON.stringify($event) +
          "addRestaurant(" +
          $event["name"] +
          "," +
          $event["cuisine"] +
          ")"
      );

      //event.preventDefault();

      let url = "http://127.0.0.1:8080/api/restaurants";
      fetch(url, {
        method: "POST",
        body: $event
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
    incr() {
      console.log("incr");
      if (this.restaurants.length > 0) {
        this.page++;
        this.getRestaurantsFromServer();
      } else this.page--;
    },
    decr() {
      console.log("decr");
      if (this.page > 1) {
        this.page--;
        this.getRestaurantsFromServer();
      } else this.page = 0;
    },
    nbrestodecr() {
      console.log("decr");
      if (this.nbPerPage < 2) {
        this.nbPerPage = 1;
      } else {
        this.nbPerPage--;
        this.getRestaurantsFromServer();
      }
    },
    nbrestoincr() {
      console.log("incr");
      this.nbPerPage++;
      this.getRestaurantsFromServer();
    }
  }
});
