// classe que vai conter a lógica dos dados. Como os dados serão estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root) // aqui o this root tá pegando a div #app lá do HTML, quem trouxe a div pra cá foi o "super" da classe debaixo com a herança.
        this.load()
    }

    load() { // essa função load é responsável por carregar e criar os dados, quando chegar a hora de mostar isso lá embaixo eles já estão criados aqui em cima.
        this.entries = [ // criei um array com objetos, cada objeto vai guardar os dados da conta.
        {
            login: 'pedrorodriguesh',
            name: 'Pedro Henrique Rodrigues',
            public_repos: '11',
            followers: '1'
        },
        {
            login: 'ZehCoque',
            name: 'José Coque',
            public_repos: '29',
            followers: '6'
        }
       ]
    }
}


// classe que vai criar a visualização do HTML, criar as tags e tabelas.
export class FavoritesView extends Favorites {
    constructor(root) { // o arquivo main.js vai começar aqui. Nesse momento o (root) é o #app lá do HTML
        super(root) // o "super" faz o link entre as duas classes.

        this.tbody = this.root.querySelector('table tbody') // this.root = div#app do HTML, estou pegando dentro dela, o Tbody que está dentro da Table.

        this.update() // aqui estamos tendo uma corrente de funções, estou chamando a update(), que na update() chama a removeAllTr()
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