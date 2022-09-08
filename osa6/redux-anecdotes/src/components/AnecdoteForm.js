import { useDispatch } from 'react-redux'
import { add } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.input.value
        event.target.input.value = ''

        dispatch(add(content))
        dispatch(setNotification(`you added ${content}`))
        setTimeout(() => dispatch(setNotification(null)), 5000)
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