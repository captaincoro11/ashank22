import { useState } from "react";
const api = {
  key: "b8b30d722c0eb1067bb00613443705f0",
  base: "https://api.openweathermap.org/data/2.5/",
};
export const Body = () => {
  const [query, setQuery] = useState(" ");
  const [weather, setWeather] = useState({});

  const fetchWeather = (location) => {
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        if (result.cod !== 200) {
          throw new Error("Location not found");
        }
        setWeather(result);
        setQuery("");
      })
      .catch(() => {
        if (location !== "Delhi") {
          fetchWeather("Delhi"); // Fallback to Delhi if not found or error occurs
        }
      });
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetchWeather(query);
    }
  };

  const search1 = () => {
    fetchWeather(query);
  };
  if (query === " ") {
    fetch(`${api.base}weather?q=delhi&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  }
  return (
    <div className="lg:flex lg:justify-around lg:flex-row-reverse lg:mt-20 ">
      <div className="lg:mr-20 font-ashank ">
        {typeof weather.main != "undefined" ? (
          <div className="text-center">
            <div className="location-box font-bold lg: mb-5">
              <div className="location text-lg ">
                {weather.name},{weather.sys.country}
                <div className="date ">{new Date().toDateString()}</div>
              </div>
            </div>

            <div>
              <div className="weather-box ">
                <div className="text-9xl animate-pulse text-blue-900">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className=" mb-4 text-xl font-medium text-yellow-950">
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="text-5xl font-jersey leading-1 md:leading-2 ">
            Quick Weather Updates
          </h1>
          <p className="font-open text-2xl ">
            With Weatherr, get weather info hassle free
          </p>

          <div>
            <main>
              <div className="search-box mb-2">
                <input
                  type="text"
                  className="search-bar rounded-md px-5 py-3 placeholder:text-black-400"
                  placeholder="Enter Location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={search}
                />
              </div>
            </main>
          </div>
          <button
            onClick={search1}
            className="rounded-md px-5 py-3 bg-blue-400 hover:bg-blue-500 text-white"
          >
            Search
          </button>

          <div className="py-2 flex gap-2 md:px-5">
            <img src="./assets/Checkmark.svg" alt="check" />
            <p>Verfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};
