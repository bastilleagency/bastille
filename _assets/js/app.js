var svg          = require('inline-svg');
var Vue          = require('vue');
Vue.config.delimiters = ["[[", "]]"];
var vueElements  = {
  hamburger: require('./hamburger'),
  form:   require('./form'),
  menu     : require('./menu'),
  faqList  : require('./faqList'),
};

window.bus       = new Vue();

document.addEventListener("DOMContentLoaded", function() {
  for(var element in vueElements){
    if(vueElements.hasOwnProperty(element) && !!document.getElementById(element)){
      vueElements[element].el = '#' + element;
      window[element] = new Vue(vueElements[element]);
    }
  }
});


svg.init({
  svgSelector: 'img.svg',
  initClass: 'js-inlinesvg',
});
