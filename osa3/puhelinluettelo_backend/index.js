require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const Phonenumber = require('./models/phonenumber')

morgan.token('body', request => JSON.stringify(request.body))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] -:response-time ms :body'))

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!body.name) {
    return res.status(400).json({ error: 'name is missing' })
  }

  const phonenumber = new Phonenumber({
    name: body.name,
    number: body.number
  })

  phonenumber.save()
    .then(savedNumber => {
      res.json(savedNumber)
    })
    .catch(error => next(error))
})

app.get('/api/persons', (req, res) => {

  Phonenumber.find({}).then(numbers => {
    res.json(numbers)
  })
})

app.delete('/api/persons/:id', (req, res, next) => {
  Phonenumber.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => {
      next(error)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
  Phonenumber.findById(req.params.id)
    .then(number => {
      if (number) {
        res.json(number)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const number = {
    name: body.name,
    number: body.number
  }

  console.log(req.params.id)
  console.log(number)

  Phonenumber.findByIdAndUpdate(req.params.id, number, { new: true })
    .then(updated => {
      res.json(updated)
    })
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
  let len = 0
  const date = new Date()

  Phonenumber.find({}).then(numbers => {
    if (numbers) len = numbers.length
    res.send(`
        <div>
            <p> Phonebook has info for ${len} people</p>
            <p>${date}</p>
        </div>`)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})