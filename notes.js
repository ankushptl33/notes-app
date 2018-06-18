console.log("Starting notes.js");


var addNotes = (title, body) => {
  console.log('Adding Note ', 'Title: ' + title, 'Body:' + body);
};

var getAll = () => {
  console.log('Getting all notes.');
};

var getNote = (title) => {
  console.log(`Getting ${title} note.`);
};

var removeNote = (title) => {
  console.log(`Removed ${title} note.`);
};

module.exports = {
  addNotes,
  getAll,
  getNote,
  removeNote
};

