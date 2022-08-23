import React, { useEffect, useState } from "react";
import "weather-react-icons/lib/css/weather-icons.css";
import Map from "./components/Map";
import WeatherDash from "./components/WeatherDash";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  let [city_weather, setWeather] = useState([]);
  let [forecast, setForecast] = useState([]);
  const [[lat, long], setCoord] = useState([49.988358, 36.232845]); //Kharkiv coord
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(
        `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=8f570a89f3134ecc8bfbedf288cba981`
      ),
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?NC&key=8f570a89f3134ecc8bfbedf288cba981&days=8&lat=${lat}&lon=${long}`
      ),
    ])
      .then((res) => Promise.all(res.map((el) => el.json())))
      .then((data) => data.map((el, index) => el.data))
      .then((res) => {
        setWeather(res[0][0]);
        setForecast(res[1]);
        setLoading(false);
      });
  }, [lat, long]);
  return (
    <div className="App ">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <WeatherDash
            {...city_weather}
            forecast={forecast}
            lat={lat}
            lon={long}
            setLoading={setLoading}
          />
          <Map
            setCoord={setCoord}
            lat={lat}
            lon={long}
            weather={city_weather}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}
export default App;
