// Manipulando arrays

let techs = ["html", "css", "js"]


// adicionar um item no fim
techs.push("nodejs") // .push adiciona um valor ao final do array
// adicionar um item no começo
techs.unshift("sql") // .unshift adiciona um valor ao início do array
// remover do fim
techs.pop() // .pop remove item do final do array
// remover do começo
techs.shift() // .shift remove item do início do array
// pegar somente alguns elementos do array
//console.log(techs.slice(0, 2)) // .slice eu seleciona elementos do array
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1) 
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')



 console.log(techs)
 console.log(index)