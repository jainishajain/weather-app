import React, { useState } from "react";
import "./styles/App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  // STATE
  const [city, setCity] = useState("");       // user input
  const [weather, setWeather] = useState(null); // API data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
// FUNCTION TO CALL API
  const getWeather = async () => {
    if (!city) return; // prevent empty input

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cba3831d369cb2cd91a8c55714f5e2f&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        setError("City not found ❌");
      } else {
        setWeather(data); // store data
      }
    } catch (err) {
      setError("Something went wrong ⚠️");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🌦️ Weather App</h1>

      {/* Search Component */}
      <SearchBar
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      />

      {/* Loader */}
      {loading && <Loader />}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Data */}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;