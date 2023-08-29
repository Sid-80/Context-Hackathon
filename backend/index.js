const express = require('express')
const cors = require("cors")

const app = express()
const port = 4000
const frontEndUrl = "http://localhost:3000/"


const corsOptions = {
    origin: frontEndUrl,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


app.post('/', (req, res) => {
    res.send('Hi')
})

app.listen(port)