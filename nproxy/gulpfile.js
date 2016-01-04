var gulp     = require('gulp');
var gulputil = require('gulp-util');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var minify   = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var less     = require('gulp-less');
var jshint   = require('gulp-jshint');
var connect  = require('gulp-connect');
var livereload = require('gulp-livereload');

// use -> npm install --global gulp (instalar gulp)
// gulp -> para iniciar
// npm install -> instalar modulos dos packages ou unico modulo npm install gulp-connect --save-dev

gulp.task('scripts', function(){

 //return gulp.src(['./arquivos/vtex-smartResearch.js','./arquivos/tbb.js','./arquivos/functions.js']) - Concat files by order
 return gulp.src('./arquivos/*.js')
        .pipe(concat('main.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('./arquivos/min'))
	    .pipe(livereload())
	    .pipe(connect.reload());
});

gulp.task('jshint', function(){

 return gulp.src('./arquivos/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default', { verbose: true }))
	    .pipe(livereload())
	    .pipe(connect.reload());
});

gulp.task('less', function(){

 return gulp.src('./arquivos/*.less')
	    .pipe(less())
	    .pipe(gulp.dest('./arquivos'))
	    .pipe(livereload())
	    .pipe(connect.reload());
});

gulp.task('css', function(){

  return gulp.src('./arquivos/*.css')
	    .pipe(concat('main.min.css'))
	    .pipe(minify())
	    .pipe(gulp.dest('./arquivos/min'))
	    .pipe(livereload())
	    .pipe(connect.reload());
});

gulp.task('images', function(){

  return gulp.src('./arquivos/*')
	    .pipe(imagemin({progressive: true, optimizationLevel: 7}))
	    .pipe(gulp.dest('./arquivos/'))
	    .pipe(livereload())
	    .pipe(connect.reload());
});

/*gulp.task('default', function(){
    gulp.run('scripts');
    gulp.watch('js/lib/*.js', function(){
    	gulp.run('scripts');
    });
});*/

//Watch -  auto save
gulp.task('watch', function(){ //gulp watch
    	//gulp.watch('./arquivos/gulp/js/*.js', ['scripts']);
    	//gulp.watch('./arquivos/gulp/js/*.js', ['jshint']);
    	livereload.listen(35729);
    	gulp.watch('./arquivos/*.less', ['less']);
    	gulp.watch('./arquivos/*.js', ['jshint']);
    	//gulp.watch('./arquivos/gulp/css/*.css', ['css']);
});

gulp.task('default', ['scripts','css','images','less','jshint','watch']);

