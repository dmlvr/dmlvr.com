const gulp = require('gulp');
const rename = require('gulp-rename');
const svgstore = require("gulp-svgstore");

gulp.task("svgsprite", function () {
  return gulp.src("public/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("public/img"));
});