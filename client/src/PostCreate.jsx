import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function PostCreate({ status, handlePostCreate }) {
  const [title, setTitle] = useState('')

  return (
    <div className='pl-3 mt-3'>
      <h3 className='font-bolder text-capitalize'>Create new Post</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault()
          handlePostCreate(title)
          setTitle('')
        }}
      >
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
