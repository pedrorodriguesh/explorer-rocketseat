import * as el from "./elements.js"

export let minutes = Number(el.minutes.textContent)
const plus = document.getElementById('plus')

plus.addEventListener('click', () => {
    minutes = minutes + 5
    
    el.minutes.textContent = minutes
})

