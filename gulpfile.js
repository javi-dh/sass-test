var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sassdoc = require('sassdoc');
var sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// Servidor Localhost + watch sobre archivos css/html
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		proxy: "localhost/adbox/sass-test"
	});

	gulp.watch("./sass/*.sass", ['sass'])
	gulp.watch("./*.php").on('change', browserSync.reload)
});

// Compilar SASS a CSS & auto inyección de cambios en el browser
gulp.task('sass', function() {
	return gulp
	.src('./sass/*.sass')
	.pipe(sourcemaps.init())

	.pipe(sass().on('error', sass.logError))
	// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	// Si queremos compilar y minificar al mismo tiempo

	.pipe(autoprefixer()) // Debe ir antes del sourcemaps.write

	.pipe(sourcemaps.write())

	.pipe(gulp.dest('./css'))

	.pipe(sassdoc())

	.pipe(browserSync.stream())
});

gulp.task('default', ['serve']);
