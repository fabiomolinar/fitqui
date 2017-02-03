//Inserindo o conteúdo dos arquivos .css de cada elemento dentro da tag <style> de cada elemento
module.exports = function(gulp,inlineCss,arquivos,mudarPath){
  if (arquivos.length > 0){
    for (var i = 0; i < arquivos.length; i++){
      var css = mudarPath(arquivos[i],"/fitqui-app/","/css/fitqui-app/");
      css = mudarPath(css,".html",".css");
      gulp.src(arquivos[i])
        .pipe(inlineCss({
          extraCss: css
        }))
        .pipe(gulp.dest(arquivos[i]));
    }
  }
  return function(){
    console.log("css injetado nos elementos");
  }
}
