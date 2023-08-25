export class GithubUser {
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers,
        }))
    }
}


// classe que vai conter a lógica dos dados
// como os dados são estruturados
export class Favorites { 
    constructor(root) {
        this.root = document.querySelector(root)
        
        this.load()

        GithubUser.search('pedrorodriguesh').then(user => console.log(user))
    }

    load() {

        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []

        this.entries = []
    }

    delete(user){
        // High-order functions (map, filter, find, reduce)
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
       this.removeAllTr()
    
    this.entries.forEach( user => {
        const row = this.createRow('tr')

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers

        row.querySelector('.remove').onclick = () => {
            const isOk = confirm('Tem certeza que deseja deletar essa linha?')

            if(isOk){
                this.delete(user)
            }
        }

        this.tbody.append(row)
    })

       
    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `
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
       `

       return tr
    }
   

    removeAllTr(){ // princípios de CleanCode. Cada função faz uma coisa, ai você pode chamar elas em uma função menor.

         // this.root = div#app lá do HTML, peguei então lá dentro da div todo o meu tbody, o corpo da tabela.
        
        this.tbody.querySelectorAll('tr').forEach((tr) => { // aqui eu peguei do corpo da tabela, todos as minhas linhas de tabela (tr) e pra cada um deles o forEach(tr) eu removi eles.
            tr.remove()
        })
    }
}