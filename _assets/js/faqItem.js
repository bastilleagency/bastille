var FaqItem = {
  template: '<div class="faq-item" :class="{\'faq-item--is-active\': isActive}"><div v-on:click.prevent="handleClick" class="faq-item__question">{{ question }}</div><div class="faq-item__answer"><slot></slot></div></div>',
  props: ['question'],
  data: () => {
    return {
      isActive: false
    };
  },
  methods: {
    handleClick: function(){
      this.isActive = !this.isActive;
      // TODO: animate
    }
  }
};


module.exports = FaqItem;
