/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = [] // setei um array vazio.

for(let item = 0; item <= 5; item++){ // laço de repetição for (valor inicial ; condição de repetição ; incremento)

    itemName = prompt("Digite o a mercadoria do mercado:")

    items[item] = itemName // como a variável "item" dentro do for muda seu valor, posso colocar ela pra decidir qual a posição do array que vai ser modificada.
}

alert(items)




