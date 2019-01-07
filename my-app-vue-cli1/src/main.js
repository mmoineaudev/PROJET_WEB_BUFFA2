import Vue from "vue";
window.onload = init;
function init() {
  //Composant restaurants, contient les différents restaurants
  Vue.component("restaurant", {
    template: `  
    <div class="item">
      <div class="content">
        <div class="header">{{id}} {{nom}}</div>
        <ul> 
        <li>Cuisine : {{cuisine}}</li> 
        </ul>
      </div>
    </div>  
  `,
    props: {
      id: { type: String, defaut: "0" },
      cuisine: { type: String, defaut: "???" },
      nom: { type: String, defaut: "restaurant : ???" }
    },
    mounted() {},
    data() {
      return { id, cuisine, nom };
    }
  });
  //instance de vue principale
  let mainView = new Vue({
    el: "#app",
    data: {
      restaurants: Array(),
      page: 0,
      nbPerPage: 10,
      name: ""
    },
    methods: {
      getRestaurantsFromServer: function() {
        console.log("getRestaurantsFromServer");
        let url =
          "http://localhost:8081/api/restaurants?page=" +
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
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      console.log("mainView.mounted");
      this.getRestaurantsFromServer();
      console.log(JSON.stringify(this.restaurants));
    }
  });
}
