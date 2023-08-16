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


let guess = prompt(`Guess the number i'm thinking, its between 0 and 10`)
const random = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(guess) != random) {
    guess = prompt(`Oh! Try again`)
    xAttempts++
}

alert(`Yeah! You did it! It only tooked ${xAttempts} attempts`)

