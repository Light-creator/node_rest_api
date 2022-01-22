const express = require('express')
const router = require('./routes/router')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(PORT, async () => {
    await mongoose.connect('mongodb+srv://admin:Robet1234@cluster0.cu9do.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('Server has been started...')
})