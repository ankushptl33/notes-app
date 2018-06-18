const fs = require('fs');

var originalObj = {
    title: 'Some Note',
    body: 'Some body'
};

var originalNote = {
    title: 'FIFA World Cup 2018',
    body: 'FIFA World starts from 14 June 2018..woohooo..'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));


var note = fs.readFileSync('notes.json');
note=JSON.parse(note);
console.log(typeof note);
console.log(note.title);

