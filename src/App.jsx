import { useState,useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather';
import Search from './components/Search';

const App = () => {
  const [weather , setWeather] = useState(null);
  const [city , setCity] = useState('Tehran');
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');

  const API_KEY = 'ef38ec92afb003bdf2184350b9ef092c';

  useEffect(()=>{
    const fetchweather = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        setError('city not found. please try again')
      } finally {
        setLoading(false);
      }
    };
    
    fetchweather();
  },[city]);

return (
  <div className="app">
    <h1>Weather App</h1>
    <Search setCity={setCity} />
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      weather && <Weather data={weather} />
    )}
  </div>
 );
};

export default App;
