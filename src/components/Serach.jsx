import React from "react";

export default function WeatherCard() {
  return (
    <div className="app">
      <div className="card">

        {/* Top */}
        <div className="top">
          <div className="location">📍 Fortaleza</div>
          <div className="bell">🔔</div>
        </div>

        {/* Weather Icon */}
        <div className="icon">
          <span className="sun">☀️</span>
          <span className="cloud">☁️</span>
        </div>

        {/* Temperature */}
        <h1 className="temp">30°</h1>
        <p className="desc">Precipitations</p>
        <p className="minmax">Max: 34° &nbsp; Min: 28°</p>

        {/* Stats */}
        <div className="stats">
          <div>💧 18%</div>
          <div>💦 67%</div>
          <div>🌬 25 km/h</div>
        </div>

        {/* Today */}
        <div className="section">
          <div className="section-title">Today</div>
          <div className="hours">
            <div className="hour">15:00<br />31°</div>
            <div className="hour active">16:00<br />30°</div>
            <div className="hour">17:00<br />28°</div>
            <div className="hour">18:00<br />28°</div>
          </div>
        </div>

        {/* Next Forecast */}
        <div className="section">
          <div className="section-title">Next Forecast</div>
          <div className="day">Monday <span>13° / 10°</span></div>
          <div className="day">Tuesday <span>17° / 12°</span></div>
        </div>

      </div>
    </div>
  );
}
