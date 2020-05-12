// const {nameChord} = require('./controller')

let note1, note2, note3
const button = document.getElementById('button')
const chordOutput = document.getElementById('chord-output')

function getChord(event) {
    note1 = document.getElementById('input_1').value
    note2 = document.getElementById('input_2').value
    note3 = document.getElementById('input_3').value
    chordOutput.innerHTML = 'G maj'
    // return nameChord(notes)
}

button.addEventListener('click', () => getChord(event))