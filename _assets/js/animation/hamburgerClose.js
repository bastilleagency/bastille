var anime = require('animejs');

module.exports = function(callback){
  anime({
      targets: ['#bar1'],
      width: {
        value: '46px',
        duration: 200,
        delay: 200
      },
      height: {
        value: '6px',
        duration: 200,
      },
      fill: '#0A0B09',
      translateX: 0,
      translateY: 0,
      duration: 400,
      loop: false,
    });
  anime({
      targets: ['#bar3'],
      fill: '#0A0B09',
      translateX: 0,
      translateY: 0,
      duration: 800,
      loop: false,
    });
  anime({
      targets: ['#bar2'],
      loop: false,
      opacity: 1,
      duration: 800
    });
  anime({
      targets: ['.hamburger'],
      rotate: 0,
      scale: {
        value: 1,
        duration: 400,
        delay: 200
      },
      borderRadius: 0,
      duration: 1000,
      loop: false,
      complete: callback
    });
};
