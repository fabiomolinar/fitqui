module.exports = function(gulp,sass,arquivos,mudarPath){
  return function(){
    if (arquivos.length > 0){
      for (var i = 0; i < arquivos.length; i++){
        gulp.src(arquivos[i])
          .pipe(sass().on('error',sass.logError))
          .pipe(gulp.dest(mudarPath(arquivos[i],"/scss/","/css/",true)));
      }
    }
    console.log("processado scss individualmente");
  }
}
