var _fitquiClasses = (function(){
  var criarExercicio = function(
    /*
    *Cada ítem abaixo tem uma explicação em cima
    *Os itens que estão comentados é por que não são usados no front-end,
    *apenas no banco de dados
    */
    //Usuários que curtiram o exercício
    //curtidores = [],
    //Usuários que não gostaram do exercício
    //detratores = [],
    //Nível de dificuldade para realizar 10 repetições de um exercício de força ou 10 minutos de um aeróbico
    //dificuldade = 0,
    //Caminho para o giy
    gif = "src/gif/gif.png",
    //Musculos primários usados no exercício; vazio se o exercício for aeróbico
    musculosPrimarios = ["biceps"],
    //Musculos secundários usados no exercício; vazio se o exercício for aeróbico
    musculosSecundarios = ["triceps","antebraço"],
    //Nome do exercício
    nome = "Exercício",
    //Notas positivas recebidas
    //notaPositiva = 0,
    //Notas neutras recebidas
    //notaNeutra = 0,
    //Notas negativas recebidas
    //notaNegativa = 0,
    //Nota "quasi-NPS" do exercício. Calculada da seguinte forma: (positivas - negativas)/(positivas+neutras+negativas)
    //nps = 0,
    //Tipo do exercício: [Força, Aeróbico, ...]
    tipo = "Força",
    //Link do youtube que mostra alguém realizando o exercício
    youtube = "https://www.youtube.com/watch?v=C8ptU8OJvCM",
    /*
    *Adicionais que não são salvos no banco de dados
    */
    //Número de repetições para exercícios de força. Igual a 1 quando aeróbico
    repeticoes = 3,
    //Duração do exercício aeróbico. Igual a 0 quando exercício de força
    duracao = 0
  ){
    return {
      gif: gif,
      musculosPrimarios: musculosPrimarios,
      musculosSecundarios: musculosSecundarios,
      nome: nome,
      tipo: tipo,
      youtube: youtube,
      repeticoes: repeticoes,
      duracao: duracao
    }
  };
  var criarSerie = function(
    /*
    *Cada ítem abaixo tem uma explicação em cima
    *Os itens que estão comentados é por que não são usados no front-end,
    *apenas no banco de dados
    */
    //Usuários que curtiram o exercício
    //curtidores = [],
    //Usuários que não gostaram do exercício
    //detratores = [],
    //Soma das dificuldades dos exercícios aeróbicos
    //dificuldadeAerobicoSomada = 0,
    //Soma das dificuldades dos exercícios de força
    //dificuldadeForcaSomada = 0,
    //Músculos primários inclusos na série
    //musculosPrimarios = ["biceps","triceps","quadriceps"],
    //Notas positivas recebidas
    //notaPositiva = 0,
    //Notas neutras recebidas
    //notaNeutra = 0,
    //Notas negativas recebidas
    //notaNegativa = 0,
    //Nota "quasi-NPS" do exercício. Calculada da seguinte forma: (positivas - negativas)/(positivas+neutras+negativas)
    //nps = 0,
    //Número de exercícios aeróbicos inclusos na série
    //numeroAerobico = 0,
    //Número de exercícios de força inclusos na série
    //numeroForca = 0,
    //Serie dos IDs dos exercícios na série
    //serie = [],
  ){
    return {

    }
  };
  return {
    criarExercicio: criarExercicio
  }
})();
