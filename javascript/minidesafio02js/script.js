const students = [
    {
        name: "Buzzo",
        grade1: 7,
        grade2: 2,
    },
    {
        name: "Pedro",
        grade1: 9,
        grade2: 5,
    },
    {
        name: "Rafael",
        grade1: 10,
        grade2: 6,
    },
]



function media(grade1, grade2) {
    let media = (grade1 + grade2) / 2
    return media
}

for(let student of students){
    mediaIndividual = media(student.grade1, student.grade2)
    let situation = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média do ${student.name} é ${mediaIndividual}
    ${situation}
    `)
}