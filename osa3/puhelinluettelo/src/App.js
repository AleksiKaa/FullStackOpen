import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import NewName from './components/NewName'
import PhoneNumbers from './components/PhoneNumbers'
import numberService from './components/numberService'
import Notification from './components/Notification'
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const showPersons = () => {
    numberService
      .getAll()
      .then(persons => { setPersons(persons) })
  }

  const setNotification = (msg) => {
    setMessage(msg)
    setTimeout(() => setMessage(null), 3000)
  }

  const setErrorMessage = (msg) => {
    setError(msg)
    setTimeout(() => setError(null), 3000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.map(p => p.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        numberService
          .update(person.id, newPerson)
          .then(response => {
            setNotification(`Updated ${person.name}`)
            showPersons()
          })
          return
      }
      else return
    }

    numberService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
        setNotification(`Added ${newPerson.name}`)
      })
      .catch(error => {
        setErrorMessage(error.response.data.error)
      })
  }

  const removePerson = (id, bool) => {
    if (!bool) return
    const person = persons.find(p => p.id === id)
    numberService
      .remove(id)
      .then(response => {
        setNotification(`Removed ${person.name}`)
        showPersons()
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const numsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    showPersons()
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={message} type="notification"/>
      <Notification msg={error} type="error"/>
      <Filter filter={filter} handleFilter={handleFilter} />
      <NewName addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumChange={handleNumChange} />
      <PhoneNumbers numbers={numsToShow} removePerson={removePerson} />
    </div>
  )

}

export default App