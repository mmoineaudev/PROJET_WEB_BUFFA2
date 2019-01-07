import Vue from "vue";
window.onload = init;
function init() {
  //Composant restaurants, contient les différents restaurants
  Vue.component("restaurant", {
    template: `  
      <p>{{id}},
      {{cuisine}},
      {{nom}}
      </p>
  `,
    props: {
      id: { type: String, defaut: 0 },
      cuisine: { type: String, defaut: "???" },
      nom: { type: String, defaut: "restaurant : ???" }
    },
    mounted() {
      console.log("restaurant.mounted");
    },
    data() {
      return {
        id,
        cuisine,
        nom
      };
    }
  });
  //instance de vue principale
  let mainView = new Vue({
    el: "#app",
    data() {
      restaurants: Array;
    },
    methods: {
      getRestaurantsFromServeur() {
        return [
          {
            id: "id",
            nom: "nom",
            cuisine: "cuisine"
          },
          {
            id: "id",
            nom: "nom",
            cuisine: "cuisine"
          },
          {
            id: "id",
            nom: "nom",
            cuisine: "cuisine"
          }
        ];
      }
    },
    mounted() {
      console.log("mainView.mounted");
      restaurants = this.getRestaurantsFromServeur();
    }
  });

  /*let url =
        "http://localhost:8080/api/restaurants?page=" +
        this.page +
        "&pagesize=" +
        this.nbPerPage +
        "&name=" +
        this.name
      console.log("getRestaurantsFromServeur : " + url)
      fetch(url)
        .then(repJSON => {
          return repJSON.json()
        })
        .then(repJS => {
          this.restaurants = repJS.data
        })
        .catch(err => {
          console.log(err)
        })
    }*/
  //composant restaurant, contient 1 restaurant
  /*let restaurant = {
  ;*/
}
