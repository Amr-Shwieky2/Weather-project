function Item({ weatherData, searchValue}) {
  return (
    <div>
      <h1>{searchValue}</h1>
      {weatherData && (
        <div>
          <h3>Temperature: {(weatherData.main.temp - 272.15).toFixed(1)}℃</h3>
          <h3>Weather: {weatherData.weather[0].description}</h3>
        </div>
      )}
    </div>
  );
}

export default Item;
