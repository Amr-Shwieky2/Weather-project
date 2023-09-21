import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import WeatherFetcher from "../components/WeatherFetcher";
import styles from "./styles/Home.module.css";


export default function Favorites() {
  const API_key = "618f1d12de7f0989b502fc7730a04748";
  // const cityList = ["London", "Italy"];
  // const [List, setList] = useState([]);

  // const handleWeatherData = (data) => {
  //   // setList((prevList) => [...prevList, data]);
  //   console.log(data.name);
  // };

  // useEffect(() => {
  //   cityList.forEach((city) => {
  //     // Assuming WeatherFetcher is a component, make sure to render it like this:
  //     return <WeatherFetcher
  //       key={city} // Add a unique key for each WeatherFetcher
  //       city={city}
  //       APIKey={API_key}
  //       onWeatherData={handleWeatherData}
  //     />;
  //   });
  // }, []); // Empty dependency array ensures this runs once

  return (
    <>

      <div >
        <h1>Italy</h1>
          <h3>Temperature: 29.7℃</h3>
          <h3>Weather: few clouds</h3>
      </div>

      <div >
        <h1>Jerusalem</h1>
          <h3>Temperature: 23.6℃</h3>
          <h3>Weather: few clouds</h3>
      </div>
      {/* <WeatherFetcher
          city="London"
          APIKey={API_key}
          onWeatherData={handleWeatherData}
        /> */}
      {/* <h1>hello</h1>
      <section>
        {List.map((item) => (
          <Item weatherData={item} searchValue={item.name} />
        ))}
      </section> */}
    </>
  );
}
