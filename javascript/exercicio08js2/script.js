/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/


const patients = [
    {
        name: "Pedro",
        age: 24,
        weight: 80,
        height: 180,
    },
    {
        name: "Marcelo",
        age: 26,
        weight: 100,
        height: 175,
    },
    {
        name: "Jorge",
        age: 23,
        weight: 72,
        height: 168,
    },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []


for(let patient of patients){
    patientsNames.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeight.push(patient.height)
}

for(let i = 0; i < patients.length; i++ ){
    alert(`O paciente de nome ${patientsNames[i]}, tem ${patientsAge[i]} anos, pesa ${patientsWeight[i]}kg e tem ${patientsHeight[i]} centímetros de altura.`)
}