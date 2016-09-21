var gulp     = require('gulp');
var watch    = require('gulp-watch');
var dev_css  = require('./tasks/dev_css.js');
var dev_js   = require('./tasks/dev_js.js');
var prod_css = require('./tasks/prod_css.js');
var prod_js  = require('./tasks/prod_js.js');

/**
 * Default tasks
 */
gulp.task('default', ['dev']);
gulp.task('dev', ['dev:js:build', 'dev:css:build', 'watch']);
gulp.task('prod', ['prod:js', 'prod:css']);
gulp.task('prod:js', ['prod:js:build', 'prod:js:s3', 'prod:js:inject']);
gulp.task('prod:css', ['prod:css:build', 'prod:css:s3', 'prod:css:inject']);

/**
 * Watch task
 */
gulp.task("watch", function() {
  gulp.watch("./assets/js/**/*.js", ["dev:js:build"]);
  gulp.watch("./assets/stylus/**/*.styl", ["dev:css:build"]);
});

/**
 * Development tasks for CSS and JS
 */
gulp.task('dev:css:build', dev_css.build);
gulp.task("dev:js:build", dev_js.build);

/**
 * Production tasks for CSS
 */
gulp.task('prod:css:build', prod_css.build);
gulp.task("prod:css:s3", ['prod:css:build'], prod_css.s3);
gulp.task("prod:css:inject", ['prod:css:build', 'prod:css:s3'], prod_css.inject);

/**
 * Production tasks for JS
 */
gulp.task("prod:js:build", prod_js.build);
gulp.task("prod:js:s3", ['prod:js:build'], prod_js.s3);
gulp.task("prod:js:inject", ['prod:js:build', 'prod:js:s3'], prod_js.inject);
