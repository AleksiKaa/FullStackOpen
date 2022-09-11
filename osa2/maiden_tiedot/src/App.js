import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import ListCountries from './components/ListCountries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [country, setCountry] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filtered = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Search filter={filter} handleFilter={handleFilter} />
      <ListCountries filtered={filtered} setFilter={setFilter} setCountry={setCountry} />
    </div>
  );
}

export default App;
