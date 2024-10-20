const Weather = ({data}) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-info">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>  
      <p>Humidity: {main.humidity}%</p>  
      <p>Conditions: {weather[0].description}</p>  
    </div>
  );
};

export default Weather;