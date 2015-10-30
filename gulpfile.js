'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function(){
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
  return gulp.src([
    './mfb/src/mfb.css',
    './mfb/src/mfb.css.map',
  ])
    .pipe(gulp.dest('./'));
});

gulp.task('scss-main', function () {
  return gulp.src([
    './mfb/src/mfb.scss',
  ])
    .pipe(gulp.dest('./'))
});

gulp.task('scss-modules', function () {
  return gulp.src([
    './mfb/src/_/_fountain.scss',
    './mfb/src/_/_slidein-spring.scss',
    './mfb/src/_/_slidein.scss',
    './mfb/src/_/_slidein.scss',
  ])
    .pipe(gulp.dest('./_/'))
});

gulp.task('default', ['js', 'css', 'scss-main', 'scss-modules']);
