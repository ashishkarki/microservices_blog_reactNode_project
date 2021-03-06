import axios from 'axios'
import { useEffect, useState } from 'react'
import { getReasonPhrase } from 'http-status-codes'
import { StatusCodes } from 'http-status-codes'

import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {
  const [posts, setPosts] = useState({})
  const [commentsByPostId, setCommentsByPostId] = useState({})
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus('')
    getPosts()
  }, [])

  const getPosts = async () => {
    const result = await axios.get('http://localhost:4001/posts')
    setPosts(result.data.posts)
  }

  const onPostCreate = async (title = '') => {
    const result = await axios.post('http://localhost:4001/posts', {
      title,
    })

    setStatus(`Post: ${getReasonPhrase(result.status)}`)

    if (result.status === StatusCodes.CREATED) {
      const { post } = result.data
      setPosts({ ...posts, [post.id]: post })
    }
  }

  const onCommentCreate = async (postId, content) => {
    const result = await axios.post(
      `http://localhost:5001/posts/${postId}/comments`,
      {
        content,
      }
    )

    if (result.status === StatusCodes.CREATED) {
      const comments = commentsByPostId[postId] || []
      comments.push({
        id: result.data.newComment.id,
        content,
      })
      setCommentsByPostId({ ...commentsByPostId, [postId]: comments })
    }
  }

  return (
    <div className='container bg-light border rounded my-5 p-3 text-dark'>
      <h1 className='bg-success text-center text-uppercase'>Blogging App</h1>

      <PostCreate
        status={status}
        handlePostCreate={(title) => onPostCreate(title)}
      />

      <hr />
      <PostList
        posts={posts}
        handleCommentCreate={(postId, content) =>
          onCommentCreate(postId, content)
        }
      />
    </div>
  )
}

export default App
