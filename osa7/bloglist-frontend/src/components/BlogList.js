import Blog from './Blog'

const BlogList = ({ blogs, user }) => {

  return (
    <div className='bloglist'>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id}  blog={blog} user={user}/>
      )}
    </div>
  )
}

export default BlogList