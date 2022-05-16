const express = require('express')
const { StatusCodes } = require('http-status-codes')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// im-memory DB
const commentsByPostId = {}

// routes
app.get('/posts/:postId/comments', (req, res) => {
  const { postId } = req.params
  const comments = commentsByPostId[postId] || []

  res.status(StatusCodes.OK).json({
    postId,
    comments,
  })
})

app.post('/posts/:postId/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex')

  const postId = req.params.postId
  const { content } = req.body

  const comments = commentsByPostId[postId] || []
  const newComment = {
    id: commentId,
    content,
  }
  comments.push(newComment)
  commentsByPostId[postId] = comments

  res.status(StatusCodes.CREATED).json({
    postId,
    newComment,
  })
})

// listening
app.listen(5001, () => {
  console.log('listening on port 5001')
})
