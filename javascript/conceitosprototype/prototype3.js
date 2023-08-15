// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver um amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore.toUpperCase())


// Verificar se um texto contém uma palavra específica.

let phrase2 = "Eu quero viver!"
console.log(phrase2.includes("viver"))  // .includes



