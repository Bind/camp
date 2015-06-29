var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css');



gulp.task('styles', function(){
    return sass('static/sass/',{style: 'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8' , 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({suffix:".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css'))
    })



gulp.task('watch', function(){
gulp.watch('static/sass/*.scss', ['styles']);
    })

gulp.task('default', ['styles', 'watch'], function() {
  // place code for your default task here
});