const express = require('express')
const app = express()
const port = 3500

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3500')
})
