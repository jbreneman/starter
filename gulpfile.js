var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('jshint-stylish');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['src/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('../public/css/'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('../public/js/'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/sass/main.scss', ['sass']);
});
