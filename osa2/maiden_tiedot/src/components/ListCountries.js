import Country from "./Country"
import Countries from "./Countries"

const ListCountries = ({filtered, setFilter, setCountry}) => {
    return (
        <div> {
            filtered.length > 10 ? "Too many matches, specify another filter" :
            filtered.length === 1 ? 
            <Country country={filtered[0]} setCountry={setCountry}/> :
            <Countries countries={filtered} setFilter={setFilter} />
            }
        </div>
    )
}

export default ListCountries