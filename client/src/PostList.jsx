function PostList({ posts = [] }) {
  return (
    <div className='d-flex flex-column flex-wrap justify-content-evenly pl-3 mt-3'>
      <h3>List of Posts</h3>

      {Object.values(posts).map((post) => (
        <div key={post.id} className='card mb-3 '>
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
