import Weather from "./Weather"

const Country = ({country}) => {
    return ( 
    <div> 
    <h1>{country.name.common}</h1> 
    <p>capital {country.capital}</p>
    <p>area {country.area}</p>

    <p><b>languages</b></p>
    <ul> 
        {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
    </ul>
    <img src={country.flags.png} alt =""/>
    <Weather country={country}/>
    </div>
    )
}

export default Country