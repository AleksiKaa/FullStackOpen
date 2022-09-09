import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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
      return [...state, action.payload]
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdotesSorted = anecdotes.sort((a, b) => b.votes - a.votes)
    dispatch(setAnecdotes(anecdotesSorted))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const anecdote = await anecdoteService.getAnecdote(id)
    const likedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.like(likedAnecdote)
    dispatch(initAnecdotes())
  }
}

export const { vote, add, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer