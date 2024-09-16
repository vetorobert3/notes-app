const chalk = require('chalk') 
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('17.7.2')

// Create add command
yargs.command({
    command: 'add', 
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Add a new note',
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove note", 
    handler: function () {
        console.log('Removing note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: "List all notes", 
    handler: function () {
        console.log('Listing notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: "Read note", 
    handler: function () {
        console.log('Reading note!')
    }
})

// add, remove, read, and list notes

yargs.parse()