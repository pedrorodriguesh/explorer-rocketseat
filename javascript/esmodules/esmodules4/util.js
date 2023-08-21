const date = new Date()  // aqui temos 2 variáveis nomeadas que vão ser exportas com o próprio nome
const greeting = name => `hello ${name}` // aqui temos 2 variáveis nomeadas que vão ser exportas com o próprio nome

export default function (argument) {
    console.log(date, greeting(argument))  // aqui temos uma função sendo exportada com default, então lá em cima podemos chamá-la de qualquer nome. 
}

export { date, greeting } // aqui ta acontecendo o export named, então com os nomes corretos devem ser importados no outro arquivo.

