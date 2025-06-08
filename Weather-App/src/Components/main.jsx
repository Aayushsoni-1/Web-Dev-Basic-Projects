import React, { useEffect, useState } from 'react';
import './Main.css'; // This should contain your background styles

const Main = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [bgClass, setBgClass] = useState('day');

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const API_KEY = '4843c54c1a0a7cee0fb4f47cbdf11613'; // <-- Replace this
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        if (data.cod === 200) {
          setWeatherData(data);
          updateBackground(data);
        } else {
          setWeatherData(null);
          alert('City not found. Please enter a valid city.');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  const updateBackground = (data) => {
    if (!data || !data.dt || !data.timezone) return;

    const localTime = new Date((data.dt + data.timezone) * 1000);
    const hour = localTime.getUTCHours();

    if (hour >= 6 && hour < 18) {
      setBgClass('day');
    } else {
      setBgClass('night');
    }
  };

  return (
    <div className={`main-container ${bgClass}`}>
      {weatherData ? (
        <div className="weather-card">
          <h2 className="text-4xl font-bold">{weatherData.name}</h2>
          <p className="text-xl capitalize">{weatherData.weather[0].description}</p>
          <p className="text-2xl mt-2">🌡 {weatherData.main.temp}°C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>💨 Wind: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="placeholder-text text-shadow-emerald-700">Search for a city above to see the weather.</p>
      )}
    </div>
  );
};

export default Main;
