var PATH = "/home/rafael/Área de Trabalho/STA Dev/web-proxy-debug/Zona/arquivos/";

module.exports = [

  {
    pattern: '/arquivos/b2b-geral.js', // Match url you wanna replace
    responder:  PATH + "b2b-geral.js"
  },

  {
    pattern: '/arquivos/b2b-geral.css', // Match url you wanna replace
    responder:  PATH + "b2b-geral.css"
  },

];