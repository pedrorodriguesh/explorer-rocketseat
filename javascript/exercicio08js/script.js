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
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "João",
        age: 24,
        weight: 120,
        height: 160,
    },
    {
        name: "Junior",
        age: 25,
        weight: 80,
        height: 183
    },
]

let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name)
}

alert(patientsNames)
