import { useState } from 'react'

const randomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const Button = ({text, handler}) => {
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([].fill.call({ length: anecdotes.length}, 0))
  const [most, setMost] = useState(0) //index

  const nextAnecdote = () => {
    setSelected(randomInt(anecdotes.length))
  }

  const vote = () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)

    let best = 0
    for(let i = 0; i < anecdotes.length; i++) {
      if (copy[i] > copy[best]) best = i
      console.log(copy[i])
    }
    setMost(best)
  }

  return (
    <div>
      <h1>Anecdote of the day!</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button text="vote" handler={() => vote()}/>
      <Button text="next anecdote" handler={() => nextAnecdote()}/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[most]}</p>
      <p>has {points[most]} votes</p>
    </div>
  )
}

export default App