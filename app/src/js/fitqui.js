var _fitqui = (function(){
  var devMode = function(){
    var emTeste = false;
    if (window.location.hostname === "localhost"){
      emTeste = true;
    }
    return emTeste;
  }
  return {
    devMode: devMode
  }
})();
