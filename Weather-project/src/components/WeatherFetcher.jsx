import React, { useState, useEffect } from "react";

const WeatherFetcher = ({ city, APIKey, onWeatherData }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setWeather(data);

        // Call the callback function with the fetched weather data
        if (onWeatherData) {
          onWeatherData(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWeather();
  }, [city, APIKey, onWeatherData]);

  return (
    <>
    </>
  );
};

export default WeatherFetcher;
