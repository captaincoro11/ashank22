import { useState } from "react";

const api = {
  key: "b8b30d722c0eb1067bb00613443705f0",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar rounded-md px-5 py-3 placeholder:text-black-400"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
                <div className="date">{new Date().toDateString()}</div>
              </div>
            </div>

            <div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Weather;
