import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { getReasonPhrase } from 'http-status-codes'

function PostCreate() {
  const defaultStatus = ''
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(defaultStatus)

  const onPostCreate = async (e) => {
    e.preventDefault()

    const result = await axios.post('http://localhost:4001/posts', {
      title,
    })

    setStatus(`Post ${getReasonPhrase(result.status)}`)

    setTitle('')
  }

  return (
    <div className='pl-3 mt-3'>
      <h3 className='font-bolder text-capitalize'>Create new Post</h3>

      <Form onSubmit={onPostCreate}>
        <Form.Group className='mb-3' controlId='postTitle'>
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Give your post a title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>

      <div className='mt-3 font-bold'>
        <p>{status}</p>
      </div>
    </div>
  )
}

export default PostCreate
