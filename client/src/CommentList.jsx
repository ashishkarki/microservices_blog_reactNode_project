import axios from 'axios'
import { useEffect, useState } from 'react'

function CommentList({ postId }) {
  const [commentsForThisPost, setCommentsForThisPost] = useState([])

  const getCommentsForThisPost = async () => {
    const result = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    )
    setCommentsForThisPost(result.data.comments)
  }

  useEffect(() => {
    getCommentsForThisPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='d-flex flex-column flex-wrap justify-content-evenly pl-3 mt-3'>
      {commentsForThisPost.length ? (
        <h3>Post Comments</h3>
      ) : (
        <h3>No Comments</h3>
      )}

      {Object.values(commentsForThisPost).map((comment) => (
        <div key={comment.id} className='card mb-3 '>
          <div className='card-body'>
            <h5 className='card-title'>{comment.content}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentList
