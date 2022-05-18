import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

function PostList({ posts = [], handleCommentCreate }) {
  return (
    <div className='d-flex flex-column flex-wrap justify-content-evenly pl-3 mt-3'>
      <h3>List of Posts</h3>

      {Object.values(posts).map((post) => (
        <div key={post.id} className='card mb-3 '>
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>

            <CommentList postId={post.id} />
            <CommentCreate
              postId={post.id}
              handleCommentCreate={(content) =>
                handleCommentCreate(post.id, content)
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
