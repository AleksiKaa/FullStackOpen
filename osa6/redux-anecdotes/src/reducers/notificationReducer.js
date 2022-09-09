import { createSlice } from '@reduxjs/toolkit'

const initialState = {message: null}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        set(state, action) {
            return {...state, message: action.payload}
        }
    }
})

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(set(message))
        setTimeout(() => dispatch(set(null)), time * 1000)
    }
}

export const { set } = notificationSlice.actions
export default notificationSlice.reducer