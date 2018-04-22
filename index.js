const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const controller = require('./controller')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

// Designer Routes
app.get('/designers', controller.getAllDesigners)
app.get('/designers/:id', controller.getDesignerById)
app.post('/designers', controller.createDesigner)

// Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Sorry, not found.'}})
})


// Listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app