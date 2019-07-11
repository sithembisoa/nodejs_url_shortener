const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect to MongoDB
connectDB()

app.use(express.json({ extented: false}))

// routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 5000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))