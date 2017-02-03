//Aqui posso definir variáveis que serão usadas apenas para essa task
var umaVariavel = "Uma variável";

//Posso definir funções também
var duplicarTexto = function(texto){
    return texto + texto;
}

//Aqui vai a parte que será exportada desse módulo
module.exports = function(gulp, texto){
    return function(){
        var final = duplicarTexto(texto);
        return console.log(umaVariavel + final);
    }
}