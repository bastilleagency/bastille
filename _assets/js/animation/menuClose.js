var anime = require('animejs');

module.exports = function(callback){
  anime({
      targets: ['#menu'],
      translateX: 0,
      opacity: 0,
      scaleY: .7,
      translateX: 0,
      duration: 400,
      loop: false,
      complete: callback
    });
};
