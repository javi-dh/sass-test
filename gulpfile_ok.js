var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./sass/**/*.sass')
		// .pipe(sourcemaps.init())
		// .pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		// .pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css/'));

});

//Watch task
gulp.task('default',function() {
    gulp.watch('./sass/**/*.sass',['styles']);
});
