const notes = require('express').Router();
const {readFromFile, readAndAppend } = require('../public/assets/js');

notes. get('/', (req, res)=> {
    readFromFile('./db.json').then((data)=> res.json(JSON.parse(data)));
});

notes.post('/', (req ,res )=> {
    console.log(req.body); 
const {notes} = req.body;
// might need a fuction lol 
if (req.body){
    const newNote ={
        note,
    };
};

});

module.exports = notes; 