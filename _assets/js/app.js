var svg          = require('inline-svg');
var Vue          = require('vue');

var hamburger    = require('./hamburger');
var menu         = require('./menu');

hamburger.el     = '#hamburger';
menu.el          = '#menu';

window.bus       = new Vue();
window.hamburger = new Vue(hamburger);
window.menu      = new Vue(menu);

svg.init({
  svgSelector: 'img.svg',
  initClass: 'js-inlinesvg',
});
