'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

sass.compiler = require('node-sass');

function sassTask() {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
}

function babelTask () {
	return gulp.src('./src/js/custom.js', { allowEmpty: true })
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest('./dist/js'));
}

// helper tasks
exports.sass = sassTask;

exports.compileJs = babelTask;

// main tasks
// for development
exports.watch = function () {
	gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('./src/js/*.js', gulp.series('compileJs'));
};

// for production build
exports.build = gulp.series(sassTask, babelTask);
