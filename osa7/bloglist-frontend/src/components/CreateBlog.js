import { setNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setAuthor, setUrl, reset } from '../reducers/blogReducer'


const CreateBlog = ({ setVisible }) => {

  const input = useSelector(state => state.blog)
  const dispatch = useDispatch()

  const addBlog = async (blog) => {
    dispatch(createBlog(blog))
  }

  const handleCreate = async (event) => {
    event.preventDefault()
    try {

      const blog = {
        title: input.title,
        author: input.author,
        url: input.url
      }
      await addBlog(blog)

      setVisible.current.toggleVisibility()

      dispatch(reset())
      dispatch(setNotification(`${blog.title} by ${blog.author} added`))

    } catch (e) {
      dispatch(setNotification('title and author are required'))
    }
  }

  return (
    <div>
      <h1>Create new</h1>
      <form onSubmit={handleCreate}>
        <div>
                    title:
          <input
            id="title"
            type="text"
            value={input.title}
            name="title"
            onChange={({ target }) => dispatch(setTitle(target.value))}
            placeholder="title"
          />
                    author:
          <input
            id="author"
            type="text"
            value={input.author}
            name="author"
            onChange={({ target }) => dispatch(setAuthor(target.value))}
            placeholder="author"
          />
                    url:
          <input
            id="url"
            type="text"
            value={input.url}
            name="url"
            onChange={({ target }) => dispatch(setUrl(target.value))}
            placeholder="url"
          />
          <button id="createButton" type="submit">create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlog