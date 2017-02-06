module.exports = function(gulp,sass){
  console.log('compilando os scss e criando os css');
  return function(){
    return gulp.src("./src/scss/**/*.scss")
      .pipe(sass().on('error',sass.logError))
      //.pipe(rename(function(path){
        //path.dirname = path.dirname.replace("/src/scss/","/css2/");
      //}));
      .pipe(gulp.dest("./src/css/"));
  }
}
