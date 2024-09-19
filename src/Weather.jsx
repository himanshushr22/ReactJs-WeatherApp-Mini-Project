import React, { useState } from "react";
import './Weather.css'

const api = {
    key: '0b03389c37d53f6f19be425ccc8fce75',
    base: 'https://api.openweathermap.org/data/2.5/'
}




const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
//   let country = weather.sys.country


  
 
  const search = (e)=>{
    if (e.key === 'Enter') {
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(result => {
            setWeather(result);
            setQuery('');  
            console.log(result);
            
        })
    }
  };

  const dateBuilder = (d)=>{
    let months = ["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div>
      <main>
        <h1>Okk!!!Weather</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Location"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main  != 'undefined')?(
               <div>
               <div className="location-box">
                   <div className="location">
                      <span>{weather.name},{weather.sys.country}</span>
                   </div>
                   <div className="Date">
                       {dateBuilder(new Date())}
                   </div>
               </div>
               <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C|°F
                </div>
                <div className="weather">
                    {weather.weather[0].description}
                </div>
               </div>
           </div>
        ): ('')}

        <div>
           
        </div>
      </main>
    </div>
  );
};

export default Weather;
