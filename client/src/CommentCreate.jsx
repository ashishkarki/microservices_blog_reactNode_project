import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'

function CommentCreate({ postId, handleCommentCreate }) {
  const [content, setContent] = useState('')

  return (
    <div className='pl-3 mt-3'>
      <h3 className='font-bolder text-capitalize'>Create new Post</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault()
          handleCommentCreate(content)
          setContent('')
        }}
      >
        <Form.Group className='mb-3' controlId='postTitle'>
          <Form.Label>Add New Comment:</Form.Label>
          <Form.Control
            type='text'
            placeholder={`Comment on post: ${postId}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit Comment
        </Button>
      </Form>
    </div>
  )
}

export default CommentCreate
