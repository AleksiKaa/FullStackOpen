import { useEffect } from 'react'

import AnecdoteForm from './components/AnecdoteForm'
import AnecDoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(initAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Filter />
      <h2>Anecdotes</h2>
      <Notification />
      <AnecDoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App