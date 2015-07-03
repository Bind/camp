var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    ngrok = require("ngrok"),
    config= require("./config");



gulp.task('styles', function(){
    return sass('static/sass/',{style: 'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8' , 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({suffix:".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css'))
    })




  ngrok.connect({
      authtoken: config.ngrok_key,
      subdomain: config.ngrok_subdomain,
      port:3000
    }, function(err, url){
      if(err){
        console.log("ngrok is awesome go register at")
      }
      console.log("Project is exposed at",url)
      })

gulp.task('watch', function(){
gulp.watch('static/sass/*.scss', ['styles']);
    })

gulp.task('default', ['styles', 'watch'], function() {
  // place code for your default task here
});