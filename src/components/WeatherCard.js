import React from "react";

function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;

  return (
    <div className="card">
      <h2>{weather.name}</h2>

      {/* Weather icon */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather"
      />

      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>🌥️ Condition: {weather.weather[0].main}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;