export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}` // endpoint é onde eu vou buscar os dados.

        return fetch(endpoint)      // o fetch() vai me devolver os dados do endpoit acima, então (then) vai transformar esses dados em json e eu estruturo os dados abaixo.
        .then(data => data.json()) // data é o nome que eu coloquei pro conjunto de dados que vou receber da api, ai data.json() transforma em json.
        .then(({ login, name, public_repos, followers }) => ({
            login,
            name,                     // aqui eu usei a desestruturação, peguei apenas os itens que eu quero e separei em um novo objeto.
            public_repos,
            followers
        }))
    }
}