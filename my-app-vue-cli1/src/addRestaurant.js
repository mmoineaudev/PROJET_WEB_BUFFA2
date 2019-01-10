export default {
  name: "addrestaurant",
  template: `
  <div class="ui raised segment" @signal="console.log('je suis recu lol')">
    <p class="ui red ribbon label">Formulaire d'ajout</p>
    <form class="ui inverted segment" >
    <div class="ui inverted form">
      <div class="trhee fields">
        <div class="field">
          <label>Nom du restaurant</label>
          <input v-model="nomToAdd" placeholder="Nom du restaurant" type="text">
        </div>
        <div class="field">
          <label>Cuisine : </label>
          <input v-model="cuisineToAdd" placeholder="Indiquez un type de cuisine" type="text">
        </div>
      </div>
      <button class="ui submit button"  v-on:click.prevent="functionadd({name:nomToAdd, cuisine:cuisineToAdd})">Submit</button>
      </div>
      </form>
      <p> {{cuisineToAdd}} {{nomToAdd}}</p>
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
  }
};
