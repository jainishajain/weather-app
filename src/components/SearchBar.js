import React from "react";
function SearchBar({ city, setCity, getWeather }) {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="button" onClick={getWeather}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
