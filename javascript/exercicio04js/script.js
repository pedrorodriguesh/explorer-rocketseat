/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os 
    parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova
    de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/ 

alert('Vamos calcular sua média no bimestre:')

let name = prompt('Digite seu nome:')
let gradeOne = prompt('Digite a primeira nota:')
let gradeTwo = prompt('Digite a segunda nota:')
let homework = prompt('Digite a terceira nota:')

gradeOne = Number(gradeOne)
gradeTwo= Number(gradeTwo)
homework = Number(homework)

let media = (gradeOne + gradeTwo + homework) / 3
media = media.toFixed(2) // .toFixed define o número de casas decimais que quero que mostre, colocando dessa forma eu evito a repetição no código.

alert('A média do aluno é: ' + media)

if (media >= 6){
    alert(`Parabéns! ${name} você foi aprovado com média ${media}.`)
} else {
    alert(`Que pena! ${name} você foi reprovado com média ${media}. Estude mais!`)
}
