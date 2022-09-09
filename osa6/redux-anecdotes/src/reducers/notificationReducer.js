import { createSlice } from '@reduxjs/toolkit'
import { setTime, clearTime } from '../reducers/timeoutReducer'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        set(state, action) {
            return action.payload
        }
    }
})

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(set(message))
        dispatch(clearTime())
        dispatch(setTime(setTimeout(() => dispatch(set(null)), time * 1000)))
    }
}

export const { set } = notificationSlice.actions
export default notificationSlice.reducer