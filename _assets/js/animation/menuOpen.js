var anime = require('animejs');

module.exports = function(callback){
  anime({
      targets: ['#menu'],
      opacity: 0.8,
      scaleY: 1,
      translateX: -84,
      duration: 400,
      loop: false,
      complete: callback
    });
};
