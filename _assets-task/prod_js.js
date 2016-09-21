var gulp         = require('gulp');
var browserify   = require('browserify');
var buffer       = require('vinyl-buffer');
var source       = require('vinyl-source-stream');
var gutil        = require('gulp-util');
var uglify       = require('gulp-uglify');
var s3           = require('gulp-s3');
var gzip         = require('gulp-gzip');
var inject       = require('gulp-inject');
var aws          = require('./aws.js');

var jsFilename  = 'app-' + Math.random().toString(36).substring(7) + '.js';


module.exports = {

  build: function(){
    return browserify({
        entries: 'assets/js/app.js',
        debug: false
      }).bundle()
      .pipe(source(jsFilename))
      .pipe(buffer())
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(gulp.dest('static/dist/js'))
      .on('end', function(){gutil.log('👏 ', gutil.colors.green('New File Created:'), gutil.colors.magenta(jsFilename))})
  },

  s3: function(){
    aws.options.uploadPath = 'static/dist/js/';
    gulp.src('static/dist/js/' + jsFilename)
      .pipe(gzip())
      .pipe(s3(aws.creds, aws.options))
      .on('end', function(){gutil.log('💪 ', gutil.colors.green('File uploaded to S3:'), gutil.colors.magenta(jsFilename))});
  },

  inject: function(){
    var target = gulp.src('./itinerary/templates/itinerary/base.html');
    var source = gulp.src(['static/dist/js/' + jsFilename], {read: false});

    return target.pipe(inject(source, {
        transform: function(filepath){
          return '<script src="{% static \'' + filepath.replace('/static/', '') + '\' %}" type="text/javascript" charset="utf-8" async></script>';
        }
      }))
      .pipe(gulp.dest('./itinerary/templates/itinerary/'))
      .on('end', function(){gutil.log('👊 ', gutil.colors.green('JavaScript file injected to template'))});
  }
}
