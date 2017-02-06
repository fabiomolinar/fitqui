//Inserindo o conteúdo dos arquivos .css de cada elemento dentro da tag <style> de cada elemento
module.exports = function(gulp,inlineCss,arquivos,mudarPath){
  return function(){
    if (arquivos.length > 0){
      for (var i = 0; i < arquivos.length; i++){
        gulp.src(arquivos[i])
          .pipe(inlineCss({
            compress: false,
            pretty: true
          }))
          .pipe(gulp.dest(mudarPath(arquivos[i],"/elementos/","/fitqui-app/",true)));
      }
    }
    console.log("css injetado nos elementos");
  }
}
