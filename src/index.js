import morgan from 'morgan';
const express = require('express')
require('./db/mongoose')
var cors = require('cors')
const projectRouter = require('./routers/project')


const app = express()
const port = process.env.PORT || 8080



app.use(express.json())
app.use(cors())
app.use(projectRouter)
app.use(morgan('dev'));

app.listen(port, () => {
    console.log('Server is up on port '+port)
})