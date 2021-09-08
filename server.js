const express = require('express');
const app = express()

const posts = [
    {
        username:"Karan",
        age:"25"
    },
    {
        username:"Sahil",
        age:"25"
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
})



app.listen(3000);