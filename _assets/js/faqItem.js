var FaqItem = {
  template: '<div class="faq-item" :class="{\'faq-item--is-active\': isActive}"><div v-on:click.prevent="handleClick" class="faq-item__question">[[ question ]]</div><div class="faq-item__answer" id="answer[[qIndex]]" v-show="isVisible"><slot></slot></div></div>',
  props: ['question', 'qIndex'],
  data: () => {
    return {
      isActive: false,
      isVisible: false
    };
  },
  methods: {
    handleClick: function(){
      var isActive = !this.isActive;
      var isVisible = !this.isVisible;

      if(isActive) {
        // fade in with delay
        this.isVisible = isVisible;
        setTimeout(() => {
          this.isActive = isActive;
        }, 100);
      }
      else {
        // fade out with delay
        this.isActive = isActive;
        setTimeout(() => {
          this.isVisible = isVisible;
        }, 300);
      }

    }
  }
};


module.exports = FaqItem;
