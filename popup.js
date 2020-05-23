const notesArrayWithSharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
const notesArrayWithFlats = ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab']
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
    },
    {
        name: 'perfect fourth',
        intervals: ['4']
    }
]

const whichArray = () => {

}

// returns a concatinated array with the root as it's first element
const orderByRoot = (root) => {
    let firstPiece = []
    let secondPiece = []
    notesArrayWithSharps.forEach(note => {
        const notesArrayWithFlats = []
        if(note !== root && firstPiece.length === 0) {
            secondPiece.push(note)
        } else {
            firstPiece.push(note)
        }
    })
    return firstPiece.concat(secondPiece)
} 

// takes an array and 'note' value
// returns the position of the given note in the given array
const noteIndex = (array, note) => {
    return array.findIndex(element => {
        return note === element
    })
}

// takes an array
// compares the array with the arrays in the chordStructures array
// returns the position of the matching array
const chordIndex = (chordIntervals) => {
    return chordStructures.findIndex(element => {
        return chordIntervals.join('') == element.intervals.join('')
    })
}

// takes an array 
// sorts the array
// iterates through the given array and pushes values from the intervalsArray into a new array using noteIndex()
// returns the new array
const chordIntervals = (chordNotes) => {
    let rootedArray = orderByRoot(chordNotes[0])
    let chordIntervals = []
    for(let i = 1; i < chordNotes.length; i++) {
        chordIntervals.push(intervalsArray[noteIndex(rootedArray, chordNotes[i])])
    }
    return chordIntervals
}

// takes an array
// gets the chord object in the chordStructures array using chordIndex()
// returns a string naming the chord from the user inputed notes
const nameChord = (chordNotes) => {
    let chord = chordIndex(chordIntervals(chordNotes))
    return chordOutput.innerHTML = `${chordNotes[0].toUpperCase()} ${chordStructures[chord].name}` 
}

let note1, note2, note3
const button = document.getElementById('button')
const chordOutput = document.getElementById('chord-output')
button.addEventListener('click', () => getChord())

// gets user's the input values; notes 
// returns name of the chord using nameChord()
function getChord() {
    note1 = document.getElementById('input_1').value
    note2 = document.getElementById('input_2').value
    note3 = document.getElementById('input_3').value
    let chordNotes = [note1, note2, note3]
    
    return nameChord(chordNotes)
}

// function call sequence
// getChord()
// nameChord()
// chordIndex() 
// chordIntervals()
// orderByRoot() 
// noteIndex()

// return sequence back to getChord()
// noteIndex()
// chordIntervals()
// chordIndex()
// nameChord()
// getChord()