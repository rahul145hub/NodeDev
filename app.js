const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './views/index.html');
    res.status(404).sendFile(filePath);
})

app.get('/about', (req, res) => {
    const filePath = path.join(__dirname, './views/about.html');
    res.status(404).sendFile(filePath);
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    const filePath = path.join(__dirname, './views/page404.html');
    res.status(404).sendFile(filePath);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});