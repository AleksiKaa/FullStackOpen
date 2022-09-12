import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import blogsReducer from './reducers/blogsReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer:
    {
      user: userReducer,
      blog: blogReducer,
      blogs: blogsReducer,
      notification: notificationReducer
    }
})

export default store