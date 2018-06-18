console.log("App Starting..");

const fs = require("fs");
const _ = require("lodash");

const yargs = require('yargs');

const argv = yargs.argv;

const notes = require("./notes");
var command = argv._[0];
console.log('Yargs:', argv);
// console.log('Command: ', command);

// console.log(notes.add(58, 42));

switch (command) {
    case 'add':
        notes.addNotes(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.getNote('note1');
        break;
    case 'remove':
        notes.remove('note1');
        break;
    default:
        console.log('Command not recognized');
        break;
}

