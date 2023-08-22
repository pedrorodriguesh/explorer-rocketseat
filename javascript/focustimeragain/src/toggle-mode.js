
const buttonToggle = document.getElementById('toggle-mode') // simplesmente pegando o botão, bem tranquilo. getElementById


buttonToggle.addEventListener('click', () => {          // aqui estou adicionando um evento, 'click' e rodando uma arrow function pra fazer o toggle na class do <html>
    document.documentElement.classList.toggle('light')
    // o document.documentElement retorna o elemento raiz do documento, por exemplo, se é uma página da web, ele pega o <html>.
})