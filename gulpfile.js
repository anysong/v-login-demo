var gulp = require('gulp');

var babel = require('gulp-babel');

gulp.task('default', function () {
    console.log(1);
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});