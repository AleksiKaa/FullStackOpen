import {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({country}) => {

    const [weatherInfo, setWeatherInfo] = useState({})
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    const api_key = process.env.APIKEY

    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then(response => {
          setWeatherInfo(response.data)
        })
    }, [])

    //console.log(weatherInfo) ei toimi hähäää!!

    return (
        <div>
            <h1>Weather in {country.capital}</h1>
            {
                //<p>temperature {Math.floor(weatherInfo.main.temp - 273)} degrees Celsius</p>
            }
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""/>
            {
                //<p>wind {weatherInfo.wind.speed} m/s</p>
            }
        </div>
    )
}

export default Weather