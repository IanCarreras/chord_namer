const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
const intervalsArray = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7']
const chordStructures = [
    {
        name: 'power chord',
        intervals: ['5']
    },
    {
        name: 'major chord',
        intervals: ['3', '5']
    },
    {
        name: 'minor chord',
        intervals: ['b3', '5']
    },
    {
        name: 'aug',
        intervals: ['3', 'b6']
    },
    {
        name: 'dim',
        intervals: ['b3', 'b5']
    },
    {
        name: 'sus4',
        intervals: ['4', '5']
    },
    {
        name: 'sus2',
        intervals: ['2', '5']
    }
]

const orderByRoot = (root) => {
    let firstPiece = []
    let secondPiece = []
    notes.forEach(note => {
        if(note !== root && firstPiece.length === 0) {
            secondPiece.push(note)
        } else {
            firstPiece.push(note)
        }
    })
    return firstPiece.concat(secondPiece)
} 


const noteIndex = (array, note) => {
    return array.findIndex(element => {
        return note === element
    })
}

const chordIndex = (chordIntervals) => {
    return chordStructures.findIndex(element => {
        return chordIntervals.join('') == element.intervals.join('')
    })
}

const chordIntervals = (chordNotes) => {
    let rootedArray = orderByRoot(chordNotes[0])
    let chordIntervals = []
    for(let i = 1; i < chordNotes.length; i++) {
        chordIntervals.push(intervalsArray[noteIndex(rootedArray, chordNotes[i])])
    }
    return chordIntervals
}

const nameChord = (chordNotes) => {
    let chord = chordIndex(chordIntervals(chordNotes))
    return chordOutput.innerHTML = `${chordNotes[0].toUpperCase()} ${chordStructures[chord].name}` 
}

let note1, note2, note3
const button = document.getElementById('button')
const chordOutput = document.getElementById('chord-output')
button.addEventListener('click', () => getChord(event))

function getChord(event) {
    note1 = document.getElementById('input_1').value
    note2 = document.getElementById('input_2').value
    note3 = document.getElementById('input_3').value
    let chordNotes = [note1, note2, note3]
    
    return nameChord(chordNotes)
}