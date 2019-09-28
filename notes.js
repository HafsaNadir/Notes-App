const fs = require('fs')
const chalk=  require('chalk')

//adding a note
const addNotes = (title,body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter((note) => note.title === title)
    console.log(duplicateNotes)
    
    if(duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('This note already exist'))
    }
    
}
//removing a note
const removeNotes = (title) => {
    notes = loadNotes()
    keepNotes = notes.filter(note => note.title !== title)
    
    if(notes.length > keepNotes.length){
        console.log(chalk.blue.inverse('Note removed'))
        saveNotes(keepNotes)
    }
    else {
        console.log(chalk.red.inverse('No note found'))
    }    
}

//saving notes
const saveNotes = (notes) => {
    dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

//loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(error) {
        return []
    }
}

module.exports = { addNotes, removeNotes }