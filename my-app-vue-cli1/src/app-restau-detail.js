export default {
  name: "app-restau-detail",
  template: `
    <div>
        <div class="modal-container">
                    
                <div class="ui blue ribbon label">
                    <slot name="header"></slot>
                </div>
        </div>

        <div class="modal-body">
            <slot name="body">
            DEFAULT
            </slot>    
        </div>
            <button class="ui black hover button" @click="$emit('close')">
                    réduire le menu 
            </button>
        </div>
    </div>
    `,
  props: {
    restaurant: {}
  }
};
