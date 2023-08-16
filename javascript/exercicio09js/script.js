/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Marcelo",
        age: 25,
        weight: 81,
        height: 175,
    },
    {
        name: "Pedro",
        age: 24,
        weight: 80,
        height: 180,
    },
    {
        name: "Paulo",
        age: 27,
        weight: 90,
        height: 176,
    },
]


function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPacientIMC(patient){
    return `
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}    
    `
}

for (let patient of patients) {
    let IMCmessage = printPacientIMC(patient)
    alert(IMCmessage)
}