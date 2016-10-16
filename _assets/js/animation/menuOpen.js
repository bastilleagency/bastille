var anime            = require('animejs');
var mobileBreakpoint = 800;


module.exports = function(callback){
  if(window.innerWidth >= mobileBreakpoint){
    anime({
      targets: ['#menu'],
      opacity: 0.95,
      scaleY: 1,
      translateX: -108,
      duration: 400,
      loop: false,
      complete: callback
    });
  }
  else {
    anime({
      targets: ['#menu'],
      opacity: 1,
      scaleY: 1,
      translateX: 0,
      duration: 400,
      loop: false,
      complete: callback
    });
  }
};
