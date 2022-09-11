import { useEffect } from 'react'

import ConnectedAnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(initAnecdotes())
  }, [dispatch])

  return (
    <div>
      <ConnectedFilter />
      <h2>Anecdotes</h2>
      <ConnectedNotification />
      <AnecdoteList />
      <ConnectedAnecdoteForm />
    </div>
  )
}

export default App