// YOUR CODE HERE
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const storeRouter = require("./routes/store")
const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", storeRouter)


app.get('/', async (req, res) => {

    res.status(200).json({ping:"ping pong"})
  })

module.exports = app