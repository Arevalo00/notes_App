const express = require('express');
const path = require('path');
const api = require('./Routs/Index');

// creating the port for heroku of local 

const PORT = process.env.port || 3001;

const app = express();

// middleware 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api); 

app.use(express.static('public')); 

// get routes index.html

app.get('/', (req, res)=> (
    res.sendFile(path.join(__dirname, '/public/index.html'))
));

app.post('/', (req,res)=> 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PROT, ()=> 
console.log(`http:localhost:${PORT}`)
);


