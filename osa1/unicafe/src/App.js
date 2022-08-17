import { useState } from 'react'

const Button = ({ handler, text }) => {
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({ g, n, b }) => {
  const all = g + n + b
  const avg = all === 0 ? 0 : (g - b) / all
  const pos = all === 0 ? 0 : (g / all) * 100

  if (all === 0) {
    return (
      <div>
        <h1>No feedback Given</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Stats</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={g} />
          <StatisticLine text="neutral" value={n} />
          <StatisticLine text="bad" value={b} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pos + " %"} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <Stats g={good} n={neutral} b={bad} />
    </div>
  )
}

export default App