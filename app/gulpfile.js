var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  inlineSource = require('gulp-inline-source'),
  runSequence = require('run-sequence'),
  connect = require('gulp-connect');
//-------------------------------
//TASKS-DEV
//-------------------------------
//Criar CSS
gulp.task('sass',require('./tasks/dev/sass')(gulp,sass));
//Adicionar CSS aos elementos
gulp.task('inline-css',require('./tasks/dev/css')(gulp,inlineSource,connect));
//Compilar versão dev
gulp.task('compile-dev',function(done){
  runSequence('sass','inline-css',function(){
    console.log('Versão dev compilada');
    done();
  });
});
//Setando default para compilar a versão dev
gulp.task('default',['compile-dev']);
//-------------------------------
//WATCH-DEV
//-------------------------------
//Se eu mudar algo no elemento, preciso inserir o css nele e copiá-lo para a pasta correta
gulp.task('watch',function(){
  connect.server({
    livereload: true
  });
  gulp.watch('./src/elementos/**/*.html',['inline-css']);
  gulp.watch(['./src/scss/**/*.scss','./src/js/**/*.js'],['compile-dev']);
});
