const express = require('express')
const router = express.Router()
const article = require('../shema/article')

router.get('/', async function(req, res) {
    const articles = await article.find()
    res.send(articles)
})

router.get('/title/:title', async function(req, res) {
    var query = '.*' + req.params.title + '.*'
    const articles = await article.find({
        title: {$regex: query, $options: 'i'}
    })
    res.status(200).json(articles)
})
router.get('/authors/:authors', async function(req, res) {
    var query = '.*' + req.params.authors + '.*'
    const articles = await article.find({
        authors: {$regex: query, $options: 'i'}
    })
    res.status(200).json(articles)
})
module.exports = router