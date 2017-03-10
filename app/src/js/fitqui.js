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
  var analyticsException = function(msg,fatal){
    ga('send','exception',{
      'exDescription': msg,
      'exFatal': fatal
    });
  };
  var setSpinner = function(){
    window.scrollTo(0,0);
    var spinner = document.querySelector('fitqui-spinner#spinner');
    spinner.setAttribute("ativado",true);
  };
  var unsetSpinner = function(){
    var spinner = document.querySelector('fitqui-spinner#spinner');
    spinner.removeAttribute("ativado");
  };
  return {
    devMode: devMode,
    log: log,
    storageVariableNames: storageVariableNames,
    analyticsException: analyticsException,
    setSpinner: setSpinner,
    unsetSpinner: unsetSpinner
  }
})();
