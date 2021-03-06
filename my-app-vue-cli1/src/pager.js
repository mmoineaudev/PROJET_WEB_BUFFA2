export default {
  name: "pager",
  template: `
        <div  class="ui two column very relaxed grid">
            <div class="column">
                <button class="ui hover button" @click="$emit('pagedecr')">Page précédente</button>
                <button class="ui hover button" @click="$emit('pageincr')">Page suivante</button>
            </div>
             <div class="column">
                <button class="ui hover button" @click="$emit('restodecr')">Moins de restaurants</button>
                <button class="ui hover button" @click="$emit('restoincr')">Plus de restaurants</button>
            </div>
        </div>
  `,
  data() {
    return {
      fields: 5
    };
  }
};
