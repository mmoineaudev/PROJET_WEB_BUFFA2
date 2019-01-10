import appRestauDetail from "./app-restau-detail";
import appMenuRestaurant from "./app-menu-restaurant";

export default {
  name: "restaurant",
  components: {
    appRestauDetail: appRestauDetail,
    appMenuRestaurant: appMenuRestaurant
  },
  template: `
    <div v-if="!( restaurant==null || !restaurant.name )" class="item">
      <div v-if="!showModal" class="content">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <div><p class="ui blue ribbon label">{{restaurant.name}}</p></div>
            <div><p class="ui black label">Cuisine : {{restaurant.cuisine}}</p></div>
            <app-menu-restaurant :restaurant="restaurant" @close="showMenu = false" v-if="showMenu"></app-menu-restaurant>
          </div>
          <div class="column">
            <div v-if="!showModal" class=""><button class="ui black hover button" id="show-modal" @click="showModal = true">Voir les détails !</button></div>
            <div v-if="!showmenu" class=""><button class="ui black hover button" id="show-menu" @click="showMenu = true">Voir le menu !</button></div>
          </div>
        </div>
      </div>
      <app-restau-detail v-if="showModal" @close="showModal = false">
        <h3 slot="header">Détails de {{restaurant.name}}</h3>
        <div class="ui green inverted segment " slot="body">
          <ul>
          <p >Détails de {{restaurant.name}}</p>
            <li v-if="restaurant.adress != null" class="ui blue label"> Adresse : {{restaurant.adress}} </li>
            <li v-if="restaurant.borough != null" class="ui blue label"> Ville : {{restaurant.borough}} </li>
            <li v-if="restaurant.grade != null" class="ui blue label"> Notation : {{restaurant.grade}} </li>
            <li v-if="restaurant.cuisine != null" class="ui blue label">Cuisine : {{restaurant.cuisine}}</li>
          </ul>
        </div>
      </app-restau-detail>
      
    </div>  
  `,
  props: {
    restaurant: {}
  },
  data() {
    return {
      showModal: false,
      showMenu: false
    };
  }
};
