let randomNumber = Math.round(Math.random() * 10)
let phrase = document.querySelector(".screen2 p")

function lucky(){
    document.querySelector(".screen1").classList.add('hide')
    document.querySelector(".screen2").classList.remove('hide')

    phrase.innerText = `You want something in life, then why don't you go and get it?`
    
}
