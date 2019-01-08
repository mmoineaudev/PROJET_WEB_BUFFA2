export default {
  name: "addrestaurant",
  template: `
  <div class="ui raised segment">
    <p class="ui red ribbon label">Formulaire d'ajout</p>
    <form class="ui inverted segment" @submit.prevent="emitAddRestaurant">
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
      <button class="ui submit button">Submit</button>
      </div>
      </form>
      <p> {{cuisineToAdd}} {{nomToAdd}}</p>
  </div>
  `,
  data() {
    return {
      cuisineToAdd: "",
      nomToAdd: ""
    };
  },
  methods: {
    emitAddRestaurant() {
      console.log("signal");
      return this.$emit("signal", {
        nom: this.nomToAdd,
        cuisine: this.cuisineToAdd
      });
    }
  }
};
