import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecDoteList = () => {
    const filter = useSelector(state => state.filter.filter)
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const voteAnecdote = (id) => {
        const voted = anecdotes.find( a => a.id === id)
        dispatch(setNotification(`You voted '${voted.content}'`))
        dispatch(vote(id))
        setTimeout(() => dispatch(setNotification(null)), 5000)
    }
    return (
        <div>
            {anecdotes.filter(a => a.content.toLowerCase().includes(filter)).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecDoteList