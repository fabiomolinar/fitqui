var
  gulp = require('gulp'),
  sass = require('gulp-sass');

//task abaixo servirá apenas como exemplo de como fazer import de tasks em outros arquivos
gulp.task('exemplo',require('.tasks/exemplo')(gulp, 'texto que será retornado no console'));

//Criar CSS
gulp.task('sass',require('.tasks/sass')(gulp,sass));
