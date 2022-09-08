import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
      return state.map(a =>
        a.id !== id ? a : changedAnecdote
      ).sort((a, b) => b.votes - a.votes)
    },
    add(state, action) {
      const anecdote = action.payload
      return [...state, asObject(anecdote)]
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) { 
      return action.payload
    }
  }
})

export const { vote, add, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer