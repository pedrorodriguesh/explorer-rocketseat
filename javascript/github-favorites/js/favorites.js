import { GithubUser } from './githubUser.js'


// classe que vai conter a lógica dos dados. Como os dados serão estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root) // aqui o this root tá pegando a div #app lá do HTML, quem trouxe a div pra cá foi o "super" da classe debaixo com a herança.
        this.load()

    }

    load() { // essa função load é responsável por carregar e criar os dados, quando chegar a hora de mostar isso lá embaixo eles já estão criados aqui em cima.
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {  // usamos o async para falar que a função é assíncrona, então aqui com o "await" a gente ta esperando o GithubUser lá de cima, fazer a busca com o fetch().
        try {  // aqui é o uso de TRY, THROW E CATCH, aqui ele vai TENTAR achar o username do GithubUser.

            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                throw new Error ('Usuário já cadastrado!')
            }


        const user = await GithubUser.search(username)
        
        if(user.login === undefined) {  // SE o valor do user.login foi undefined ele vai JOGAR um novo erro.
            throw new Error('Usuário não encontrado!')
        }

        this.entries = [user, ...this.entries] // aqui a gente ta criando um novo array, pegando o usuário novo que achou acima e colocando no array, e ESPALHANDO... com o array antigo.
        this.update()
        this.save()


    }   catch(error) { // Ai aqui ele vai PEGAR o error e mostrar num alert
        alert(error.message)
    } 
        
        
    }

    delete(user) { 
        //High-order functions (map, filter, reduce)
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login) // pelo principio da imutabilidade, eu não to mexendo no array [this.entries] o filter me retorna um NOVO array, o [filteredEntries] 

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}


// classe que vai criar a visualização do HTML, criar as tags e tabelas.
export class FavoritesView extends Favorites {
    constructor(root) { // o arquivo main.js vai começar aqui. Nesse momento o (root) é o #app lá do HTML
        super(root) // o "super" faz o link entre as duas classes.

        this.tbody = this.root.querySelector('table tbody') // this.root = div#app do HTML, estou pegando dentro dela, o Tbody que está dentro da Table.

        this.update() // aqui estamos tendo uma corrente de funções, estou chamando a update(), que na update() chama a removeAllTr()
        this.onadd()
        this.save()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {

            const { value } = this.root.querySelector('.search input') // de novo usando a desestruturação, eu peguei o input e usando { value } peguei de dentro dele direto.

            this.add(value)
           
            
        }
    }

    update() { // função update. 
       this.removeAllTr()

       this.entries.forEach ( user => { // aqui eu peguei o array entries[] e rodei method de array o .forEach, então agora, cade objeto recebe o nome de "user" e pra cada user ele vai rodar uma função 
        const row = this.createRow()
        
        row.querySelector('.user img').src = `https://github.com/${user.login}.png` // aqui tá sendo feito pra cada user.
        row.querySelector('.user img').alt = `Foto do ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
        row.querySelector('.user a').href = `https://github.com/${user.login}`
        
        row.querySelector('.remove').addEventListener('click', () => {
            const isOk = confirm('Tem certeza que deseja apagar essa linha?')

            if(isOk){
                this.delete(user)
            }
            
        })

        this.tbody.append(row)
       })

    }

    createRow(){ // Outra função, pequena, eu criei um tr com o JS, e dentro dele, no innerHTML eu coloquei os meus dados.

        const tr = document.createElement('tr') // aqui com o .createElement você tem que passar o nomedaDaTag.

        tr.innerHTML  = `
        <td class="user">
            <img src="" alt="foto do pedro">
            <a href="" target="_blank">
                     <p></p>
                     <span></span>
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

        return tr
    }


    removeAllTr(){ // Aqui eu criei uma função, pequena, pra fazer apenas uma coisa, remover as tabelas, isso é um príncipio de CleanCode.
         
        this.tbody.querySelectorAll('tr') // tbody é a o <tbody></tbody> lá do HTML, estou pegando dentro dele TODOS os table rows.
        .forEach((tr) => { // aqui é .paraCada(table row) eu vou remover o table row. => tr.remove()
            tr.remove()
        }) // 

    }
}