export default {
  template: `
    <div class="item">
      <div class="content">
        <div class="header">{{id}} {{nom}}</div>
        <ul> 
        <li>Cuisine : {{cuisine}} </li> 
        </ul>
      </div>
    </div>  
  `,
  data: {
    localnom: "nomDEFAULT",
    localcuisine: "cuisineDEFAULT",
    localid: "999"
  },
  props: {
    id: { type: Number },
    cuisine: { type: String, defaut: "???" },
    nom: { type: String, defaut: "restaurant : ???" }
  },
  mounted() {
    console.log(
      "mounted resteaurant : " +
        this.localcuisine +
        "; " +
        this.localid +
        "; " +
        this.localnom
    );
    this.localcuisine = cuisine;
    this.localid = id;
    this.localnom = nom;
  },
  data() {
    return { id: this.localid, cuisine: this.localcuisine, nom: this.localnom };
  },
  name: "restaurant"
};
