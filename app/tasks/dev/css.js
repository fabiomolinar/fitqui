//Inserindo o conteúdo dos arquivos .css de cada elemento dentro da tag <style> de cada elemento
module.exports = function(gulp,inlineCss,arquivos,mudarPath){
  return function(){
    if (arquivos.length > 0){
      for (var i = 0; i < arquivos.length; i++){
        console.log(arquivos[i]);
        var css = mudarPath(arquivos[i],"/fitqui-app/","/css/fitqui-app/",false);
        css = mudarPath(css,".html",".css",false);
        console.log(css);
        console.log(mudarPath(arquivos[i],"html","html",true));
        gulp.src(arquivos[i])
          .pipe(inlineCss({
            extraCss: css,
            removeStyleTags: false,
          }))
          .pipe(gulp.dest(mudarPath(arquivos[i],"html","html",true)));
      }
    }
    console.log("css injetado nos elementos");
  }
}
