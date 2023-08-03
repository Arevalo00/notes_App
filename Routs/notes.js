// bringing in the nessairy packages / file 

const notes = require('express').Router();
const {readFromFile, readAndAppend } = require('../public/assets/js');
// getting and posting to the page 
notes. get('/', (req, res)=> {
    readFromFile('./db.json').then((data)=> res.json(JSON.parse(data)));
});

notes.post('/', (req ,res )=> {
    console.log(req.body); 
const {notes} = req.body;
// were the new note is made to append it to the file and if there is an erro 
if (req.body){
    const newNote ={
        note,
    };
    readAndAppend(newNote, './public/notes.json');
const respons = {
    status:'Working',
    body:newNote,
};

res.json(respons);
} else {
    res.json('Not Working');
}


});

// this is exporting the file 

module.exports = notes; 