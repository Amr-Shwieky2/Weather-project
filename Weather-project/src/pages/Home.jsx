import React, { useState } from "react";
import Box from "../components/box";
import WeatherFetcher from "../components/WeatherFetcher";
import styles from "./styles/Home.module.css";
import Item from "../components/Item";

  
  export default function Home() {
  const [searchValue, setSearchValue] = useState("Jerusalem");
  const [weatherData, setWeatherData] = useState(null);
  const [List, setList] = useState([]);
  const API_key = "ae4b0b7a779a0eb3958dd8fd1885a932";

  const handleInputChange = (value) => {
    setSearchValue(value);
  };


  // Callback function to handle weather data
  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const handleClick = () => {
    if (weatherData) {
      setList(List.push(weatherData))
      // listFunction(List)
    }
  };
  

  return (
    <div className={styles.center}>
      <h1>Weather detector🌡️🌞</h1>
      <section>
        <Box message={"Search for a city"} onInputChange={handleInputChange} />
      </section>

      <div>
        
        {/* Pass city, API_key, and the callback function to the WeatherFetcher component */}
        <WeatherFetcher
          city={searchValue}
          APIKey={API_key}
          onWeatherData={handleWeatherData}
        />
        {/* Pass weatherData as an object to the Item component */}
        <Item weatherData={weatherData} searchValue ={searchValue}/>
        {/* <button onClick={handleClick}>+</button> */}
      </div>
    </div>
  );
}


// {"coord":{"lon":-96.8847,"lat":32.184},
    // "weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],
    // "base":"stations","main":{"temp":295.74,"feels_like":296.33,
    // "temp_min":294.31,"temp_max":298.05,"pressure":1016,"humidity":87},
    // "visibility":10000,"wind":{"speed":0.45,"deg":171,"gust":1.34},
    // "clouds":{"all":23},"dt":1695298242,"sys":{"type":2,"id":2020745,
    // "country":"US","sunrise":1695298499,"sunset":1695342388},
    // "timezone":-18000,"id":4700234,"name":"Italy","cod":200},

    // {"coord":{"lon":-0.1257,"lat":51.5085},
    // "weather":[{"id":801,"main":"Clouds",
    // "description":"few clouds","icon":"02d"}],
    // "base":"stations","main":{"temp":290.54,"feels_like":290.19,
    // "temp_min":288.42,"temp_max":292.24,"pressure":995,"humidity":71},
    // "visibility":10000,"wind":{"speed":3.09,"deg":150},
    // "clouds":{"all":20},"dt":1695298004,
    // "sys":{"type":2,"id":2075535,"country":"GB","sunrise":1695275057,"sunset":1695319397},
    // "timezone":3600,"id":2643743,"name":"London","cod":200}