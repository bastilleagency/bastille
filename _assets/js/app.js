var svg          = require('inline-svg');
var Vue          = require('vue');
var vueElements  = {
  hamburger: require('./hamburger'),
  menu     : require('./menu')
};

window.bus       = new Vue();

for(var element in vueElements){
  if(vueElements.hasOwnProperty(element) && !!document.getElementById(element)){
    vueElements[element].el = '#' + element;
    window[element] = new Vue(vueElements[element]);
  }
}

svg.init({
  svgSelector: 'img.svg',
  initClass: 'js-inlinesvg',
});
