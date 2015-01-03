(function () {
  'use strict';

  // get our dependencies
  var gulp = require('gulp');
  var uglify = require('gulp-uglify');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');
  var rename = require('gulp-rename');

  // browserify, uglify, concat and rename
  gulp.task('javascript', function () {
    return browserify('./assets/js/app.js')
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./assets/cache/'));
  });

  // by default, watch for changes and build (build at beginning too)
  gulp.task('default', ['javascript'], function () {
    gulp.watch('./assets/js/*', ['javascript']);
  });
}());
