var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/jquery-1.11.3.min.js','js/bootstrap.min.js','bower_components/angular/angular.js','bower_components/angular-route/angular-route.js','js/angular-app.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['scripts', 'watch']);