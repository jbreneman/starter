'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('jshint-stylish');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
    gulp.src(['src/sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
});
