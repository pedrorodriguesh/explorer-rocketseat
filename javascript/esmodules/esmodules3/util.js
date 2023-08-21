const text = "mensagem"                 // posso exportar também direto da variável, só colocando o export na frente, vai dar exatamente na mesma
const message = "outra mensagem"     // export const message = "outra mensagem"

export { text, message }  // no NAMED EXPORT, a gente pode fazer múltiplas vezes, porém o nome precisa ser o mesmo. então !!export {nomevariável, nomevariável}



// curiosidade: Nao pode exportar 2x a mesma variável, o JS acusa um erro: Uncaught SyntaxError: Duplicate export of 'message' (at util.js:4:16)

