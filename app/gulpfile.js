var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  inlineSource = require('gulp-inline-source'),
  runSequence = require('run-sequence');

//Helper functions
var mudarPath = function(caminho, alvo, destino,removerFileName){
  removerFileName = (removerFileName !== "undefined") ? removerFileName : true;
  var final = caminho.replace(alvo,destino);
  if (removerFileName === true){
    final = final.substring(0,final.lastIndexOf("/"));
  }
  return final;
}
//Global gulp variables
var arquivosScss = [
  './src/scss/principal.scss',
  './src/scss/fitqui-app/fitqui-app.scss',
  './src/scss/fitqui-app/fitqui-buttons-menu.scss',
  './src/scss/fitqui-app/fitqui-footer.scss',
  './src/scss/fitqui-app/fitqui-header.scss',
  './src/scss/fitqui-app/fitqui-content/fitqui-content.scss'
];
var elementos = [ //arquivos que tem que ser inseridos nos elementos
  './src/elementos/fitqui-app.html',
  './src/elementos/fitqui-buttons-menu.html',
  './src/elementos/fitqui-footer.html',
  './src/elementos/fitqui-header.html',
  './src/elementos/fitqui-content/fitqui-content.html'
];
//-------------------------------
//TASKS-DEV
//-------------------------------
//Criar CSS
gulp.task('sass',require('./tasks/dev/sass')(gulp,sass,arquivosScss,mudarPath));
//Adicionar CSS aos elementos
gulp.task('inline-css',require('./tasks/dev/css')(gulp,inlineSource,elementos,mudarPath));
//Compilar versão dev
gulp.task('compile-dev',function(done){
  runSequence('sass','inline-css',function(){
    console.log('Versão dev compilada');
    done();
  });
});
//Setando default para compilar a versão dev
gulp.task('default',['compile-dev']);
