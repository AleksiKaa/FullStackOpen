import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const anecdoteObj = asObject(content)
  const response = await axios.post(baseUrl, anecdoteObj)  
  return response.data
}

const like = async (anecdote) => {
  const id = anecdote.id
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, createNew, like, getAnecdote }