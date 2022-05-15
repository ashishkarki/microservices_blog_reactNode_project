const express = require('express')
const { StatusCodes } = require('http-status-codes')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// im-memory DB
const posts = {}

// routes
app.get('/posts', (req, res) => {
  res.status(StatusCodes.OK).json({
    posts,
  })
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = {
    id,
    title,
  }

  res.status(StatusCodes.CREATED).json({
    post: posts[id],
  })
})

// listening
app.listen(4001, () => {
  console.log('listening on port 4001')
})
