let phrase = document.querySelector(".screen2 p")

function lucky(){
    document.querySelector(".screen1").classList.add('hide')
    document.querySelector(".screen2").classList.remove('hide')

    let randomNumber = Math.round(Math.random() * 10)

    switch(randomNumber){
        case 0:
        phrase.innerText = `Start where you are. Use what you have. Do what you can.`
        break

        case 1:
        phrase.innerText = `Perfect people don't exist, so don't pretend to be one`
        break

        case 2:
        phrase.innerText = `I don't need pats on the back from people for my achievements`
        break

        case 3:
        phrase.innerText = `Anyone can take your life, but not what you believe in, no!`
        break

        case 4:
        phrase.innerText = `Yeah, don't take opinions from people that won't listen to yours`
        break

        case 5:
        phrase.innerText = `The real you is who you are when ain't  nobody watching`
        break

        case 6:
        phrase.innerText = `The cure to pain isn't something you buy a liquor stores`
        break

        case 7:
        phrase.innerText = `I fell in love with my pain and i slipet with my regrets`
        break

        case 8:
        phrase.innerText = `Mistakes can make you grow, that doesn't mean you're friends`
        break

        case 9:
        phrase.innerText = `Who you are is up to you, don't leave it up to them`
        break

        case 10:
        phrase.innerText = `People change, even Satan used to be an angel`
        break
    }
}

function again(){
    document.querySelector(".screen1").classList.remove('hide')
    document.querySelector(".screen2").classList.add('hide')
}
