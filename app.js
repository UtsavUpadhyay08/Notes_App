// add notes, remove notes, read notes, list of notes
const yargs = require('yargs')
const chalk= require('chalk')
const notes=require('./notes.js')

yargs.version('1.1.0')
//add notes
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:  {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//remove notes
yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder: {
        title: {
            describe: "Title of Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//Read Notes
yargs.command({
    command: 'read',
    describe:'To read notes',
    builder: {
        title: {
            describe: "Title Of Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

//List of Notes
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function(argv){
        notes.listNote()
    }
})

yargs.parse()


// console.log(yargs.argv)