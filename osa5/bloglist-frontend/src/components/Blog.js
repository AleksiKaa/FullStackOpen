import { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const ViewButton = ({ setVisible }) => {
  return (
    <div>
      <button onClick={() => setVisible(true)}>view</button>
    </div>
  )
}

const HiddenTable = ({ blog, like, setVisible, deleteBlog }) => {
  return (
    <div>
      <ul>
        <li>url: {blog.url}</li>
        <li>likes: {blog.likes}
          <form onSubmit={() => like(blog)}>
            <button type="submit">like</button>
          </form>
        </li>
        <li>{blog.user.name}</li>
        <form onSubmit={() => deleteBlog(blog.id)}>
          <button type="submit">remove</button>
        </form>
        <button onClick={() => setVisible(false)}>hide</button>
      </ul>
    </div>
  )
}

const Blog = ({ blog }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)

  const like = async (blog) => {

    // eslint-disable-next-line no-undef
    const updated = structuredClone(blog)
    delete updated.user
    updated.user = blog.user.id
    updated.likes += 1
    await blogService.update(blog.id, updated)

  }

  const deleteBlog = async () => {
    window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
    await blogService.remove(blog.id)
  }

  return (
    <div style={blogStyle}>
      <p>{blog.title}</p>
      <p>{blog.author}</p>
      {!visible ?
        <ViewButton setVisible={setVisible} /> :
        <HiddenTable blog={blog} like={like} setVisible={setVisible} deleteBlog={deleteBlog} />}
    </div>
  )
}

HiddenTable.propTypes = {
  like: PropTypes.func.isRequired,
  setVisible: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog