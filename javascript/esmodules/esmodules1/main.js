import "./util.js" // nessa linha eu estou importando o script util.js, que dentro dele tem uma variável com uma string "mensagem", ao importar ele já executa mandando o alert.

console.log(message) // essa variável só existe no outro arquivo, no util.js, não consigo usar ela aqui dessa maneira.

// se eu for ver no console do link temos o erro de que "message is not defined", pois como falei, essa variável não existe aqui no main.js