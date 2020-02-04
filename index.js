const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
var port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))// pour les params
app.use(bodyParser.json())

require('./routes/student.js')(app)

models
    .sequelize
    .sync({ force: false })
    .then(() => app.listen(port, () => console.log('server is listenning')))