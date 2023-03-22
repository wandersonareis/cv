const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');

gulp.task('compile-pug', function() {
  return gulp.src('index.pug')
    .pipe(data(function() {
      return require('./data.json');
    }))
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('**/*.pug', gulp.series('compile-pug'));
});

gulp.task('default', gulp.series('compile-pug', 'watch'));
