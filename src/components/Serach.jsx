import { useEffect, useState } from "react";

import clear from '../assets/clear.png';
import clouds from '../assets/clouds.png';
import mist from '../assets/mist.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import drizzle from '../assets/drizzle.png';
import search from '../assets/search.png';

function Search() {

  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("Multan");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=8d8071e4c5d8487e97334556251212&q=${city}`
    )
      .then(res => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then(info => {
        setWeather(info);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

  }, [city]);

  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity);
    }
  };

  // Weather images map
  const weatherImages = {
    sunny: clear,
    clear: clear,
    cloud: clouds,
    cloudy: clouds,
    overcast: clouds,
    rain: rain,
    drizzle: drizzle,
    snow: snow,
    fog: mist,
    mist: mist,
    haze: mist,
  };

  const conditionText = weather?.current?.condition?.text?.toLowerCase();
  const weatherImageKey = Object.keys(weatherImages).find(key =>
    conditionText?.includes(key)
  );
  const weatherImage = weatherImageKey
    ? weatherImages[weatherImageKey]
    : null;

  return (
    <div className="parent">
      <div className="card">

        {/* 🔍 Search Box */}
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          style={{ padding: 12, borderRadius: 8 }}
        />

         <img
    src={search}
    alt="search"
    onClick={handleSearch}
    style={{
      width: 24,
      height: 24,
      cursor: "pointer"
    }}
  />

        {loading && <h2>Loading...</h2>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}

        {weather && !loading && (
          <>
            {weatherImage && (
              <img src={weatherImage} alt="weather" style={{ padding: 20 }} />
            )}

            <h1>{weather.current.temp_c}°C</h1>
            <h2>{weather.location.name}</h2>

            <div className="bottom">
              <div className="humidity">
                <img src={humidity} alt="humidity" />
                <span>{weather.current.humidity}%</span>
                <p>Humidity</p>
              </div>

              <div className="wind">
                <img src={wind} alt="wind" />
                <span>{weather.current.wind_kph} km/h</span>
                <p>Wind</p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Search;
