import appRestauDetail from "./app-restau-detail";
export default {
  name: "restaurant",
  components: { appRestauDetail: appRestauDetail },
  template: `
    <div class="item">
      <div class="content">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <div><p class="ui green ribbon label">{{restaurant.name}}</p></div>
            <div><p class="ui tag label">Cuisine : {{restaurant.cuisine}}</p></div>
          </div>
          <div class="column">
            <div class=""><button id="show-modal" @click="showModal = true">Show Modal</button></div>
          </div>
        </div>
      </div>
      <app-restau-detail v-if="showModal" @close="showModal = false">
        <h3 slot="header">Détails de {{restaurant.name}}</h3>
        <div slot="body">
          <h2>Menu de {{restaurant.name}}</h2>
          <p>{{restaurant.address​​}} {{restaurant.borough​​}} {{restaurant.cuisine​​}} {{restaurant.grades​​}} {{restaurant.name​​}}</p>
        </div>
      </app-restau-detail>
    </div>  
  `,
  props: {
    restaurant: {}
  },
  data() {
    return {
      showModal: false
    };
  }
};
