// classe que vai conter a lógica dos dados. Como os dados serão estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root) // aqui o this root tá pegando a div #app lá do HTML, quem trouxe a div pra cá foi o "super" da classe debaixo com a herança.
    }
    
}


// classe que vai criar a visualização do HTML, criar as tags e tabelas.
export class FavoritesView extends Favorites {
    constructor(root) { // o arquivo main.js vai começar aqui. Nesse momento o (root) é o #app lá do HTML
        super(root) // o "super" faz o link entre as duas classes.

        this.update() // aqui estamos tendo uma corrente de funções, estou chamando a update(), que na update() chama a removeAllTr()
    }

    update() { // função update. 
       this.removeAllTr()

       
    }

    createRow(){ // Outra função, pequena, eu criei um tr com o JS, e dentro dele, no innerHTML eu coloquei os meus dados.

        const tr = document.createElement('tr') // aqui com o .createElement você tem que passar o nomedaDaTag.

        tr.innerHTML  = `
        <td class="user">
            <img src="https://github.com/pedrorodriguesh.png" alt="foto do pedro">
            <a href="https://github.com/pedrorodriguesh" target="_blank">
                     <p>Pedro Henrique</p>
                     <span>pedrorodriguesh</span>
            </a>
            </td>
            <td class="repositories">
                 11
            </td>
            <td class="followers">
                 1
            </td>
            <td>
            <button class="remove">&times;</button>
        </td>
        ` // aqui eu separei a <tr> lá do HTML e trouxe pra cá.
    }


    removeAllTr(){ // Aqui eu criei uma função, pequena, pra fazer apenas uma coisa, remover as tabelas, isso é um príncipio de CleanCode.
        const tbody = this.root.querySelector('table tbody') // this.root = div#app do HTML, estou pegando dentro dela, o Tbody que está dentro da Table.

        tbody.querySelectorAll('tr') // tbody é a o <tbody></tbody> lá do HTML, estou pegando dentro dele TODOS os table rows.
        .forEach((tr) => { // aqui é .paraCada(table row) eu vou remover o table row. => tr.remove()
            tr.remove()
        }) // 

    }
}