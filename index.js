const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const todoRoutes = require('./routes/auth.js')

//создаем наше приложение

const app = express()

async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://olenkaivanova08:Ivanova1976@cluster0.mb9ms.mongodb.net/journal'
        )
        console.log('MongoDB connect...')
        //Для того чтобы начать непосредственное предоставление файлов,
        // необходимо передать имя каталога, в котором находятся статические ресурсы, 
        //в функцию промежуточной обработки express.static. 
        
    } catch(e){
        console.log(e)
    }
}

start()

app.listen(port, () => {
    console.log('Server has been started...')
    })

app.use('/api/auth',todoRoutes)
app.use(express.static(__dirname + '/views'))
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/:id', (req, res) => res.sendFile(__dirname + '/views/article.html'))
