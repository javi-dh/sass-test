var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching sass/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		proxy: "localhost/adbox/sass-test"
	});

	gulp.watch("./sass/*.sass", ['sass']);
	gulp.watch("./*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("./sass/*.sass")
	.pipe(sass())
	//   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.init())
	.pipe(sourcemaps.write(''))

	.pipe(gulp.dest("./css"))

	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
