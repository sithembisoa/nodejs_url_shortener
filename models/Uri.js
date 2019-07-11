const mongoose = require('mongoose')

const uriSchema = new mongoose.Schema({
    urlCode: String,
    logUrl: String,
    shortUrl: String,
    date: {type: String, default: date.now}
})

module.exports = mongoose.model('Url', urlSchema)