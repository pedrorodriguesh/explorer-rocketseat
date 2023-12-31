/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/


let result = prompt('Adivinhe o número que estou pensando, está entre 0 e 10')
const random = Math.round(Math.random() * 10)  // Math.random gera um número aleatório entre 0 e 1, sem inserir o 0 e 1. || Math.round arredonda esse valor

let xAttempts = 1 // variável de controle pra contar quantas tentativas o usuário fez

while(Number(result) != random) {
    result = prompt("Erro, tente novamente: ")
    xAttempts++
} 

alert(`Você adivinhou o número em ${xAttempts} tentativas`)



