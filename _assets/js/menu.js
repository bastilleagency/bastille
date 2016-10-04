var menuOpen = require('./animation/menuOpen');
var menuClose = require('./animation/menuClose');


var menu = {
  data: {
    isAnimating: false,
    isOpen: false
  },
  methods: {
    toggleMenu: function(hamburgerIsOpen){
      this.animateMenu();
      this.isOpen = hamburgerIsOpen;
    },
    animateMenu: function(){
      this.isAnimating = true;
      if(!this.isOpen) {
        menuOpen(() => {this.isAnimating = false;});
      } else {
        menuClose(() => {this.isAnimating = false;});
      }
    }
  },
};


module.exports = menu;
