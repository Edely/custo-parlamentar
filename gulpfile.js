const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');

gulp.task('default', ['sass', 'concat-css', 'js', 'compress']);
//gulp.task('default', ['sass', 'concat-css', 'js', 'compress', 'clean', 'images', 'fonts']);

gulp.task('watch', function(){
    gulp.watch('./alba/static/styles.scss', ['sass', 'concat-css']);
    gulp.watch('./alba/static/js/scripts.js', ['js', 'compress']);
});

gulp.task('sass', function(){
    return gulp.src(['./alba/static/styles.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./alba/static/'))
});

gulp.task('concat-css', ['sass'], function(){
    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './node_modules/font-awesome/css/font-awesome.css', './alba/static/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(uglifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./alba/static/'));
});