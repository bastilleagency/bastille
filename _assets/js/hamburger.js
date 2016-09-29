var hamburgerOpen = require('./animation/hamburgerOpen');
var hamburgerClose = require('./animation/hamburgerClose');

var hamburger = {
  data: {
    isOpen: false,
    isAnimating: false
  },
  methods: {
    toggle: function(){
      if(!this.isAnimating){
        this.animateButton();
        this.isOpen = !this.isOpen;
        menu.toggleMenu(this.isOpen);
      }
    },
    animateButton: function(){
      this.isAnimating = true;
      if(!this.isOpen) {
        hamburgerOpen(() => {this.isAnimating = false;});
      } else {
        hamburgerClose(() => {this.isAnimating = false;});
      }
    }
  }
};

module.exports = hamburger;
