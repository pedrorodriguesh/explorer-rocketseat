import './toggle-mode.js' // importando a lógica por trás do light mode. 
import * as FocusTimer from './FocusTimer/index.js' // aqui o import * as, importa tudo que tá dentro do outro arquivo como um objeto de nome FocusTimer.

FocusTimer.start(1, 3) 