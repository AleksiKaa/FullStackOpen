import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import LogOut from './components/LogOut'
import CreateBlog from './components/CreateBlog'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import { initBlogs } from './reducers/blogsReducer'
import { setUser } from './reducers/userReducer'


const App = () => {
  const notificationMessage = useSelector(state => state.notification)
  const blogs = useSelector(state => state.blogs)
  const userState = useSelector(state => state.user)

  const dispatch = useDispatch()
  const ref = useRef()

  useEffect(() => {
    dispatch(initBlogs())
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      {notificationMessage}
      <h1>Blogs</h1>
      {userState.user === null ?
        <LoginForm/> :
        <div>
          <p>{userState.user.name} logged in</p>
          <LogOut/>
          <BlogList
            blogs={blogs}
            user={userState.user.username}
          />
          <Togglable buttonLabel="create new blog" ref={ref}>
            <CreateBlog
              setVisible={ref}
            />
          </Togglable>
        </div>
      }
    </div>
  )
}

export default App
