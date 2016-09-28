var svg = require('inline-svg');
var anime = require('animejs');

svg.init({
  svgSelector: 'img.svg',
  initClass: 'js-inlinesvg',
}, function(){
  anime({
      targets: ['#bar1'],
      width: {
        value: '6px',
        duration: 600
      },
      translateX: {
        value: '20px',
        duration: 800
      },
      translateY: {
        value: '-6px',
        duration: 1200
      },
      height: {
        value: '46px',
        duration: 800,
        delay: 600
      },
      fill: {
        value: '#BBBBBB',
        duration: 3000,
        delay: 0
      },
      loop: false,
    });
  anime({
      targets: ['#bar3'],
      translateY: '-16px',
      fill: {
        value: '#BBBBBB',
        duration: 3000,
        delay: 0,
      },
      duration: 800,
      delay: 600,
      loop: false,
    });
  anime({
      targets: ['#bar2'],
      opacity: 0,
      duration: 1200,
      loop: false,
    });
  anime({
      targets: ['.hamburger'],
      rotate: 45,
      borderRadius: '50%',
      scale: {
        value: .6,
        duration: 800,
        delay: 600
      },
      duration: 4000,
      loop: false,
    });
});
