import { useEffect, useState } from "react";

import clear from '../assets/clear.png';
import clouds from '../assets/clouds.png';
import mist from '../assets/mist.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import drizzle from '../assets/drizzle.png';

function Register() {
const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Multan", "Faisalabad", 
  "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Hyderabad", "Sukkur", 
  "Bahawalpur", "Jhang", "Sheikhupura", "Rahim Yar Khan", "Mardan", 
  "Abbottabad", "Swat", "Mirpur", "Dera Ghazi Khan", "Bannu", "Muzaffarabad"
];

  const [city, setCity] = useState("multan");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=8d8071e4c5d8487e97334556251212&q=${city}`)
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong");
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

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  // Map weather text keywords to images
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

  const conditionText = weather.current.condition.text.toLowerCase();
  const weatherImageKey = Object.keys(weatherImages).find(key => conditionText.includes(key));
  const weatherImage = weatherImageKey ? weatherImages[weatherImageKey] : null;

  return (
    <div className="parent">
      <div className="card">
        <select
          value={city}
          style={{ padding: 12, borderRadius: 8, backgroundColor: "white", color: "black" }}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <br />

        {weatherImage && (
          <img src={weatherImage} alt="weather icon" style={{ padding: 20 }} />
        )}

        <br />
        <h1>{weather.current.temp_c}°C</h1>
        <h2>{weather.location.name}</h2>

        <div className="bottom">
          <div className="humidity">
            <img src={humidity} alt="humidity icon" />
            <span className="value">{weather.current.humidity}%</span>
            <span className="label">Humidity</span>
          </div>

          <div className="wind">
            <img src={wind} alt="wind icon" />
            <span className="value">{weather.current.wind_kph} km/h</span>
            <span className="label">Wind</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
