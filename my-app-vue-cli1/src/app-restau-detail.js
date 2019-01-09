export default {
  name: "app-restau-detail",
  template: `
    <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper ">
            <div class="modal-container ui raised ">
                    <div class="ui red ribbon label">
                    <slot name="header"></slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                </slot>    
            </div>
            
            <div class="modal-footer">
                <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                    OK
                </button>
                </slot>
            </div>
            </div>
        </div>
        </div>
    </transition>
    `,
  props: {
    restaurant: {}
  }
};
