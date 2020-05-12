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
    return console.log(chordNotes[0], chordStructures[chord].name)
}

const chordNotes = ['e', 'g', 'b']
// nameChord(chordNotes)