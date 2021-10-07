const express = require('express')
const app = express()
const fs = require('fs');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get('*', (req, res) => {
    fs.readFile('page404.html', 'utf-8', (err, data) => {
        if (!err) {
            res.end(data)
        }
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})