import { TbTemperatureCelsius, TbSunrise, TbSunset } from "react-icons/tb";
import { WeatherIcon } from "weather-react-icons";
import Day from "./Day";

export default ({
  city_name,
  weather,
  temp,
  app_temp,
  sunrise,
  sunset,
  forecast,
}) => {
  // let data = [
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200, description: "Super very raining day" },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  //   {
  //     valid_date: "2018-04-22",
  //     weather: { code: 200 },
  //     max_temp: 25,
  //     min_temp: 20,
  //     wind_spd: 3.5,
  //     pres: 1000,
  //   },
  // ];

  return (
    <div className=" w-4/5 mx-auto bg-gradient-to-b from-sky-400 to-sky-200 text-white rounded-xl p-2 shadow-inner mt-10 flex flex-col items-center container 2xl">
      <h1 className="text-center text-3xl sm:text-5xl">
        Weather in {city_name || "Kharkiv"}
      </h1>
      <div className="flex flex-col items-center mt-3">
        <div className=" flex items-center gap-3 text-xl sm:text-2xl">
          <div className="flex items-center gap-1 ">
            <WeatherIcon iconId={weather?.code || 200} name="owm" />
            <p>{weather?.description || "Sunny"}</p>
          </div>
          <div className="flex items-center gap-3  ">
            <div className="flex gap-2 items-center">
              <TbSunrise className="text-yellow-400" />
              {sunrise || "6:00"}
            </div>
            <div className="flex gap-2 items-center">
              <TbSunset className="text-yellow-400" />
              {sunset || "22:00"}
            </div>
          </div>
        </div>
        <div className="flex gap-3 sm:text-xl">
          <div className="flex items-center">
            Current: {temp || "22"}
            <TbTemperatureCelsius />
          </div>
          <div className="flex items-center">
            Feels like: {app_temp || "25"}
            <TbTemperatureCelsius />
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden my-5 mx-auto w-10/12 rounded-lg  lg:w-full 2xl:justify-center">
        {forecast.map((day) => (
          <Day key={day.valid_date} day={day} />
        ))}
      </div>
    </div>
  );
};
