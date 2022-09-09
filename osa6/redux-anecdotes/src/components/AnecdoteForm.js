import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.input.value
        event.target.input.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`you added ${content}`, 5))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input name="input" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm