var anime = require('animejs');

module.exports = function(callback){
  anime({
      targets: ['#menu'],
      opacity: 0.95,
      scaleY: 1,
      translateX: -108,
      duration: 400,
      loop: false,
      complete: callback
    });
};
