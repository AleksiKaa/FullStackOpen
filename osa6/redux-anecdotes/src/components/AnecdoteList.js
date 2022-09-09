import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecDoteList = () => {
    const filter = useSelector(state => state.filter.filter)
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id) => {
        const voted = anecdotes.find( a => a.id === id)
        dispatch(voteAnecdote(id))
        dispatch(setNotification(`You voted '${voted.content}'`, 5))
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecDoteList