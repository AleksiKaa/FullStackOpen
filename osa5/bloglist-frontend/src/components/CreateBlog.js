import { useState } from 'react'
import blogService from '../services/blogs'

const CreateBlog = ({ setVisible, setBlogs, setErrorMessage }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()

    try {

      const blog = {
        title: title,
        author: author,
        url: url
      }

      await blogService.create(blog)

      setVisible.current.toggleVisibility()

      setTitle('')
      setAuthor('')
      setUrl('')
      setBlogs(await blogService.getAll())
      setErrorMessage(`${title} by ${author} added`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    } catch (e) {
      setErrorMessage('Title and author are required')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h1>Create new</h1>
      <form onSubmit={handleCreate}>
        <div>
                    title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
                    author:<input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
                    url:<input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlog