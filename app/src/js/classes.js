var _fitquiClasses = (function(){
  var criarExercicio = function(
    /*
    *Cada ítem abaixo tem uma explicação em cima
    *Os itens que estão comentados é por que não são usados no front-end,
    *apenas no banco de dados
    */
    //Nível de dificuldade (medido de 1 a 9) para realizar 10 repetições de um exercício de força ou 10 minutos de um aeróbico
    //dificuldade = 0,
    //Caminho para o gif
    gif = "src/gif/gif.png",
    //Musculos primários usados no exercício; para exercicios que usam varios musuclos (como aerobicos), escrever nome dos musculos ou `Todos` para selecionar todos
    musculosPrimarios = ["Biceps"],
    //Musculos secundários usados no exercício; vazio se o exercício for aeróbico
    musculosSecundarios = ["Triceps","Antebraço"],
    //Nome do exercício
    nome = "Exercício",
    //Tipo do exercício: [Força, Aeróbico, Aquecimento, Alongamento ...]
    tipo = "Força",
    //Equipamento necessário para realizar o exercício
    //equipamento = ['pesos','barra','bola'],
    //Local onde é possível realizar o exercício
    //local = ['casa','academia'],
    //Link do youtube que mostra alguém realizando o exercício
    youtube = "https://www.youtube.com/watch?v=C8ptU8OJvCM",
    //Número de repetições para exercícios de força para nivel iniciante. Igual a 0 quando aeróbico
    repeticoes = 3,
    //Duração do exercício aeróbico para nivel iniciante. Quando exercício de força, indica o tempo (em segundos) para realizar o numero de repeticoes
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
  var criarExercicioInfo = function(
    /*
    *Cada ítem abaixo tem uma explicação em cima
    *Os itens que estão comentados é por que não são usados no front-end,
    *apenas no banco de dados
    */
    //Usuários que curtiram o exercício
    //curtidores = [],
    //Usuários que não gostaram do exercício
    //detratores = [],
    //Notas positivas recebidas
    //notaPositiva = 0,
    //Notas neutras recebidas
    //notaNeutra = 0,
    //Notas negativas recebidas
    //notaNegativa = 0,
    //Nota "quasi-NPS" do exercício. Calculada da seguinte forma: (positivas - negativas)/(positivas+neutras+negativas)
    //nps = 0,
    //Indicador mostrando se o vídeo relacionado ao exercício é domínio público
    //youtubeAcessivel = true
  ){
    return{

    }
  };
  var criarSerie = function(
    /*
    *Cada ítem abaixo tem uma explicação em cima
    *Os itens que estão comentados é por que não são usados no front-end,
    *apenas no banco de dados
    */
    //Exercícios aeróbicos inclusos na série
    //aerobico = ["Corrida","Polichinelo"]
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
