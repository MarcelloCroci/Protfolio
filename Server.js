const express = require('express');
const path = require('path'); // Importa il modulo 'path'
const app = express();

// Serve i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint per la root (che ora restituirà index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});