// function constructor


function Person(name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}

const pedro = new Person("Pedro")
const joao = new Person("Joao")

console.log(pedro.walk())
console.log(joao.walk())