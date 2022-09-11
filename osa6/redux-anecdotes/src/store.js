import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import timeoutReducer from './reducers/timeoutReducer'

const store = configureStore({
    reducer:
    {
        anecdotes: anecdoteReducer,
        notification: notificationReducer,
        filter: filterReducer,
        timeout: timeoutReducer
    }
})

export default store