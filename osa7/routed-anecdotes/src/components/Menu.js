import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from "react-router-dom"
import AnecdoteList from "./AnecdoteList"
import Anecdote from "./Anecdote"
import About from "./About"
import CreateNew from "./CreateNew"

const Menu = ({ anecdotes, addNew, notification }) => {
    const padding = {
      paddingRight: 5
    }

    return (
      <Router>
        <div>
          <Link style={padding} to="/">anecdotes</Link>
          <Link style={padding} to="/create">create new</Link>
          <Link style={padding} to="/about">about</Link>
          <p>{notification}</p>
        </div>
  
        <Routes>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    )
  }

  export default Menu