const mongoose = require('mongoose')

//создаем схему,которая определяет форму документов в коллекции
const {Schema} = mongoose

const articlesSchema = new Schema({
    title:  String, 
    authors: [String],
    publication_date: Date,
    contents: String,
    tags:[String],
    review: [
        {
            name: String,
            message: String,
            rating: Number

        }
    ]
})

//преобразуем схему в модель,с которой мы можем работать 
const model = mongoose.model('articles', articlesSchema)
module.exports = model
