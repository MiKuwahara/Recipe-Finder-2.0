const express = require('express')
const dotenv = require('dotenv').config()
const color = require("colors")
const {connectDB} = require("./config/db")

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())

app.use("/api/users", require("./routes/userRoutes"))

app.use('/api/reviews', require('./routes/reviewRoutes') )

app.listen(port, () => console.log(`Server started on port ${port}`))