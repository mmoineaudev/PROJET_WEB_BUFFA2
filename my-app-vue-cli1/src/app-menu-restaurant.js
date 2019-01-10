export default {
  name: "app-menu-restaurant",
  template: `
        <div>
            <div class="ui top attached tabular menu">
                <a class="hover item" @click="m_menu">
                   Menu
                </a>
                <a class="item" @click="m_reserver">
                    Réserver !
                </a>
                <a class="item" @click="m_recapitulatif">
                    Récapitulatif !
                </a>
            </div>
            <div v-if="reserver" class="ui green label ">
                <div class="ui blue ribbon label">Nombre de personnes attendues : <input type="number" v-model="reservation" placeholder="Amenez vos amis !"></input></div>
                <div>&nbsp;</div>
                <div class="ui blue ribbon label">Date de la réservation : <input type="date" v-model="dateResa"></input></div>
            </div>
            <div v-if="recapitulatif && reservation>0" class="ui green label ">
                <p>On vous attend le {{dateResa}} vous et vos {{reservation -1}} amis</p>
                <p v-if="reservation==1">Commandez une <a href="http://www.mister-pizza.com">pizza</a> pour {{reservation}} personne </p>
            </div>
            <div v-if="menu " class="ui green label ">
                <div><p class="ui blue ribbon label">La suggestion du chef aujourd'hui est {{ entree[un].intitule }} , {{ entree[un].prix }}€</p></div>
                <p>&nbsp;</p>
                <div><p class="ui blue ribbon label">La suggestion du chef d'hier était {{ entree[deux].intitule  }} ,  {{ entree[deux].prix }}€</p></div>
            </div>
            <button class="ui black hover button" @click="$emit('close')">Réduire le menu</button>
        </div>
    `,
  props: {
    restaurant: {}
  },
  data() {
    return {
      reserver: true,
      recapitulatif: false,
      reservation: 0,
      menu: false,
      dateResa: Object,
      entree: [
        { prix: Math.floor(Math.random() * 10000), intitule: "Salade" },
        { prix: Math.floor(Math.random() * 10000), intitule: "pain" },
        { prix: Math.floor(Math.random() * 10000), intitule: "frites" },
        { prix: Math.floor(Math.random() * 10000), intitule: "haribo" },
        { prix: Math.floor(Math.random() * 10000), intitule: "cocacola" },
        { prix: Math.floor(Math.random() * 10000), intitule: "cacahuètes" },
        { prix: Math.floor(Math.random() * 10000), intitule: "la famine" },
        {
          prix: Math.floor(Math.random() * 10000),
          intitule: "tarte au pommes"
        },
        { prix: Math.floor(Math.random() * 10000), intitule: "grafikart" }
      ],
      un: 0,
      deux: 0
    };
  },
  methods: {
    m_reserver() {
      console.log("reserver");
      this.reserver = true;
      this.recapitulatif = false;
      this.menu = false;
    },
    m_menu() {
      console.log("menu");
      this.reserver = false;
      this.recapitulatif = false;
      this.menu = true;

      this.un = Math.floor(Math.random() * this.entree.length);
      this.deux = Math.floor(Math.random() * this.entree.length);
      console.log(un, deux);
    },
    m_recapitulatif() {
      console.log("recapitulatif");
      this.reserver = false;
      this.recapitulatif = true;
      this.menu = false;
    }
  }
};
