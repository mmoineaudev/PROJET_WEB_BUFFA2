<template>
<div id="app">
  <tr>
    <td class="collapsing">{{name}}</td>
    <td class="collapsing">{{cuisine}}</td>
    <td class="collapsing">
      <button class="ui small button">supprimer</button>
    </td>
    <td class="collapsing">
      <button class="ui small button">modifier</button>
    </td>
  </tr>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["nom", "cuisine", "id"],
  data() {
    return {};
  },
  mounted() {
    console.log("hello");
    this.getRestaurantsFromServeur();
  },
  methods: {
  }
};
</script>

<style>
</style>
