//Inserindo o conteúdo dos arquivos .css de cada elemento dentro da tag <style> de cada elemento
module.exports = function(gulp,inlineCss,connect){
  return function(){
    return gulp.src('./src/elementos/**/*.html')
      .pipe(inlineCss({
        compress: false,
        pretty: true
      }))
      //.pipe(rename(function(path){
        //path.dirname = path.dirname.replace("/src/elementos/","/fitqui-app2/");
      //}))
      .pipe(gulp.dest("./src/fitqui-app/"))
      .pipe(connect.reload());
  }
}
