var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  inlineCss = require('gulp-inline-css');

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
  './src/fitqui-app/fitqui-app.html',
  /*
  './src/fitqui-app/fitqui-buttons-menu.html',
  './src/fitqui-app/fitqui-footer.html',
  './src/fitqui-app/fitqui-header.html',
  './src/fitqui-app/fitqui-content/fitqui-content.html'
  */
];
//-------------------------------
//TASKS
//-------------------------------

//Criar CSS
gulp.task('sass',require('./tasks/dev/sass')(gulp,sass,arquivosScss,mudarPath));
//Adicionar CSS aos elementos
gulp.task('inline-css',require('./tasks/dev/css')(gulp,inlineCss,elementos,mudarPath));
