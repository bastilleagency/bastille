var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var stylus       = require('gulp-stylus');
var nib          = require('nib');
var rupture      = require('rupture');
var poststylus   = require('poststylus');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var concat       = require('gulp-concat');
var gutil        = require('gulp-util');
var sGrid        = require('s-grid');


module.exports = {
  build: function() {
    return gulp.src("assets/stylus/main.styl")
      .pipe(sourcemaps.init())
      .pipe(stylus({
        define: {'static': '/static/'},
        use: [
          sGrid(),
          nib(),
          rupture(),
          poststylus([
            'css-mqpacker',
            'autoprefixer'
          ])
        ]
      }))
      .on('error', gutil.log)
      .pipe(concat("main.css"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("static/css"));
  }
}
