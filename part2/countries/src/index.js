import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

const Weather = (country) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  console.log("api_key", api_key);
  console.log("weather", weather);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherstack.com/current? access_key=${api_key} & query=${country.name}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h3>Weather in {country.name}</h3>
      <h4>temprature:</h4> <p>{weather.temprature}</p>
      <img src={weather.weather_icons} alt={country.name} />
      <h4>wind:</h4>
      <p>
        {weather.wind_speed} direction {weather.wind_dir}
      </p>
    </div>
  );
};

const Country = ({ country, show }) => {
  const [showView, setShowView] = useState(show);

  const handleClick = () => {
    setShowView(!show);
  };

  return (
    <div>
      <div style={{ display: showView ? "none" : "" }}>
        {country.name}
        <button onClick={handleClick}>show</button>
      </div>
      <div style={{ display: showView ? "" : "none" }}>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>

        <h3>languages</h3>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} style={{ height: 110 }} alt={country.name} />
        <Weather country={country} />
      </div>
    </div>
  );
};

const Countries = ({ countries, filter }) => {
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filterCountries.length > 10) {
    return (
      <div>
        <p>Too mamy matches,specify another filter</p>
      </div>
    );
  }

  if (filterCountries.length > 1) {
    return (
      <div>
        {filterCountries.map((filterCountry) => (
          <Country
            key={filterCountry.name}
            country={filterCountry}
            show={false}
          />
        ))}
      </div>
    );
  }

  if (filterCountries.length === 1) {
    return (
      <div>
        {filterCountries.map((filterCountry) => (
          <Country country={filterCountry} show={true} />
        ))}
      </div>
    );
  }

  return null;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <p>
        find countries <input onChange={handleFilterChange} />
      </p>
      <Countries countries={countries} filter={filter} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
