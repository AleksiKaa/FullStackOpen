import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogsReducer'

const HiddenTable = ({ blog, setVisible, deleteBlog, user }) => {

  const dispatch = useDispatch()

  const like = (blog) => {
    dispatch(likeBlog(blog))
  }

  return (
    <div>
      <ul>
        <li>url: {blog.url}</li>
        <li className='likes'>likes: {blog.likes}
          <form onSubmit={() => like(blog)}>
            <button className="likeButton" type="submit">like</button>
          </form>
        </li>
        <li>{blog.user.name}</li>
        {user === blog.user.username ?
          <form onSubmit={() => deleteBlog(blog.id)}>
            <button className="removeButton" type="submit">remove</button>
          </form> : <p></p>}
        <button onClick={() => setVisible(false)}>hide</button>
      </ul>
    </div>
  )
}

HiddenTable.propTypes = {
  setVisible: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default HiddenTable