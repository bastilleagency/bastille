var gulp       = require('gulp');
var browserify = require('browserify');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

module.exports = {
  build: function(){
    return browserify({
        entries: '_assets/js/app.js',
        debug: true
      })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .on('error', gutil.log)
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('js'));
  }
};
