import * as el from './elements.js'



export function countdown(){

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    console.log(minutes, seconds)
}