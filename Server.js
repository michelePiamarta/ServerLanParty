const express = require("express")
const mysql = require('mysql2'); //serve per collegare fra loro il server node e il database mysql, scaricato con npm install mysql2
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

punteggi = []

app.post('/add', (req, res) => {
    const {punteggio} = req.body;
    punteggi.push(punteggio)
    console.log(req.body)
    console.log(punteggio)
    res.status(201).json(req.body);//status 201 significa che è stato creato con successo qualcosa sul server
});

app.get('/', (req, res) => {
  console.log("richiesti punteggi")
  res.json(punteggi)//status 201 significa che è stato creato con successo qualcosa sul server
});

app.listen(port, () => {
  console.log("app listening at http://localhost:3000");
});

