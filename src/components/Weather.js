import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherContainer, Temp, City } from './WeatherStyles';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=medellin&units=metric&appid=b954e507c8463816c0473cae1e7eeada'

const Weather = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
      
    }, [])
    

    if(!data) return null;


  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>Medellín, Colombia</City>
      
    </WeatherContainer>
  )
}

export default Weather
