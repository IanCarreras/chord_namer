// takes an array with user inputed notes, and the notes arrays from data.js
// returns the notes array with either the sharps or flats
const whichArray = (chordNotes, notesArrayWithSharps, notesArrayWithFlats) => {
    let notes = chordNotes.join('')
    if(notes.includes('#')) {
        return notesArrayWithSharps
    } else {
        return notesArrayWithFlats
    }
}

// takes a note value 
// iterates through a notes array 
// if the note in the current iteration is not the given value and the firstPiece array is empty push the note to the secondPiece array
// returns a concatinated array with the root as it's first element
const orderByRoot = (root, chordNotes) => {
    let firstPiece = []
    let secondPiece = []
    let array = whichArray(chordNotes, notesArrayWithSharps, notesArrayWithFlats)
    array.forEach(note => {
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
    let rootedArray = orderByRoot(chordNotes[0], chordNotes)
    let chordIntervals = []
    for(let i = 1; i < chordNotes.length; i++) {
        chordIntervals.push(intervalsArray[noteIndex(rootedArray, chordNotes[i])])
    }
    return chordIntervals
}

// takes an array
// gets the chord object in the chordStructures array using chordIndex()
// returns a string naming the chord from the user inputed notes

const nameChord = async (chordNotes) => {
    try {
        let chord = await chordIndex(chordIntervals(chordNotes))
        return chordOutput.innerHTML = `${chordNotes[0].toUpperCase()} ${chordStructures[chord].name}` 
    } catch(err) {
        console.log(err)
        return chordOutput.innerHTML = 'try again'
    }
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