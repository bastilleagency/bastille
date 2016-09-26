// var gulp         = require('gulp');
// var stylus       = require('gulp-stylus');
// var nib          = require('nib');
// var rupture      = require('rupture');
// var poststylus   = require('poststylus');
// var sGrid        = require('s-grid');
// var autoprefixer = require('autoprefixer');
// var mqpacker     = require('css-mqpacker');
// var concat       = require('gulp-concat');
// var gutil        = require('gulp-util');
// var s3           = require('gulp-s3');
// var gzip         = require('gulp-gzip');
// var inject       = require('gulp-inject');
// var aws          = require('./aws.js');
//
//
// var cssFilename  = 'main-' + Math.random().toString(36).substring(7) + '.css';
//
//
// module.exports = {
//
//   build: function() {
//     return gulp.src("assets/stylus/main.styl")
//       .pipe(stylus({
//         compress: true,
//         define: {'static': 'https://iceland-itinerary.s3.amazonaws.com/static/'},
//         use: [
//           sGrid(),
//           nib(),
//           rupture(),
//           poststylus([
//             'css-mqpacker',
//             'autoprefixer'
//           ])
//         ]
//       }))
//       .on('error', gutil.log)
//       .pipe(concat(cssFilename))
//       .pipe(gulp.dest("static/dist/css"))
//       .on('end', function(){gutil.log('🙌 ', gutil.colors.green('New File Created:'), gutil.colors.magenta(cssFilename))});
//   },
//
//   s3: function(){
//     aws.options.uploadPath = 'static/dist/css/';
//     gulp.src('static/dist/css/' + cssFilename)
//       .pipe(gzip())
//       .pipe(s3(aws.creds, aws.options))
//       .on('end', function(){gutil.log('💪 ', gutil.colors.green('File uploaded to S3:'), gutil.colors.magenta(cssFilename))});
//   },
//
//   inject: function(){
//     var target = gulp.src('./itinerary/templates/itinerary/base.html');
//     var source = gulp.src(['static/dist/css/' + cssFilename], {read: false});
//
//     return target.pipe(inject(source, {
//         transform: function(filepath){
//           return '<link rel="stylesheet" href="{% static \'' + filepath.replace('/static/', '') + '\' %}" media="screen" charset="utf-8" />';
//         }
//       }))
//       .pipe(gulp.dest('./itinerary/templates/itinerary/'))
//       .on('end', function(){gutil.log('👌 ', gutil.colors.green('CSS file injected to template'))});
//   }
//
// }
