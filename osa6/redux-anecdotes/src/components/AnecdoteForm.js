import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.input.value
        event.target.input.value = ''

        props.createAnecdote(content)
        props.setNotification(`you added ${content}`, 5)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = { setNotification, createAnecdote }

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)


export default ConnectedAnecdoteForm