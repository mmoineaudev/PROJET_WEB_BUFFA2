export default {
  name: "addrestaurant",
  template: `
  <div class="ui raised segment" @signal="console.log('je suis recu lol')">
    <p class="ui red ribbon label">Formulaire d'ajout</p>
    <form class="ui inverted segment" >
    <div class="ui inverted form">
      <div class="two fields">
        <div class="field">
          <label>Nom du restaurant</label>
          <input v-model="addName" placeholder="Nom du restaurant" type="text">
        </div>
        <div class="field">
          <label>Cuisine : </label>
          <input v-model="addCuisine" placeholder="Indiquez un type de cuisine" type="text">
        </div>
      </div>
      <button class="ui submit button"  v-on:click.prevent="functionadd({nom:nomToAdd, cuisine:cuisineToAdd})">Submit</button>
      </div>
      </form>
      <p> addId :{{ addId }} addName : {{ addName }} addCuisine : {{ addCuisine }}</p>
  </div>
  `,
  props: {
    functionadd: {} //so proud of this one lol
    //la funccionnalidad lol
  },
  data() {
    return {
      cuisineToAdd: "",
      nomToAdd: ""
    };
  },

  methods: {
    emitAddRestaurant() {
      console.log("signal");
      this.$emit("signal", {
        nom: this.nomToAdd,
        cuisine: this.cuisineToAdd
      });
    }
  }
};
