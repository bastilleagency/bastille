var anime = require('animejs');

module.exports = function(callback){
  anime({
      targets: ['#bar1'],
      width: {
        value: '6px',
        duration: 300
      },
      translateX: {
        value: '20px',
        duration: 600
      },
      translateY: {
        value: '-6px',
        duration: 900
      },
      height: {
        value: '46px',
        duration: 500,
        delay: 300
      },
      fill: {
        value: '#BBBBBB',
        duration: 1000,
        delay: 0
      },
      loop: false,
    });
  anime({
      targets: ['#bar3'],
      translateY: '-16px',
      fill: {
        value: '#BBBBBB',
        duration: 1000,
        delay: 0,
      },
      duration: 400,
      delay: 200,
      loop: false,
    });
  anime({
      targets: ['#bar2'],
      opacity: 0,
      duration: 900,
      loop: false,
    });
  anime({
      targets: ['.hamburger'],
      rotate: 45,
      borderRadius: '50%',
      translateY: {
        value: -10,
        duration: 400,
        delay: 200
      },
      translateX: {
        value: -10,
        duration: 400,
        delay: 200
      },
      scale: {
        value: .6,
        duration: 400,
        delay: 200
      },
      duration: 1000,
      loop: false,
      complete: callback
    });
};
