var _fitqui = (function(){
  var devMode = function(){
    var emTeste = false;
    if (window.location.hostname === "localhost"){
      emTeste = true;
    }
    return emTeste;
  };
  var log = function(conteudo){
    if (this.devMode()){
      console.log(conteudo);
    }
  };
  var storageVariableNames = {
    naoRepetirAvisoDeCuidado : "naoRepetirAvisoDeCuidado",
    naoRepetirAvisoDeCuidadoData : "naoRepetirAvisoDeCuidadoData"
  };
  return {
    devMode: devMode,
    log: log,
    storageVariableNames: storageVariableNames
  }
})();
