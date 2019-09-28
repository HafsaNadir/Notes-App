const fs = require('fs')

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
        console.log('New note added')
    }
    else {
        console.log('This note already exist')
    }
    
}

const saveNotes = (notes) => {
    dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

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
module.exports= addNotes