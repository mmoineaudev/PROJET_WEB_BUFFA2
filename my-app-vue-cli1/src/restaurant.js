export default {
  name: "restaurant",
  template: `
    <div class="item">
      <div class="content">
      <p class="ui green ribbon label">{{nom}}</p>
        <p class="ui tag label">Cuisine : {{cuisine}}</p> 
      </div>
      <hr>
    </div>  
  `,
  props: {
    id: { type: String },
    nom: { type: String },
    cuisine: { type: String }
  }
};
