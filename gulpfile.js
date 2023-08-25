const { src, dest, watch, series } = require('gulp');
const { default: gulpPurgeCSS } = require('gulp-purgecss');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
};

function watchTask() {
  watch(['scss/**/*.scss','*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)