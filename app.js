const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title: {
            describe: 'add command title',
            demandOption: true,
            type: 'string',
        },

        body: {
            describe: 'add command body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'remove command title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'listing out all notes',
    handler: function(){
        console.log('listing out all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function(){
        console.log('reading a note')
    }
})

yargs.parse()
