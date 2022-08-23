import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WeatherIcon } from "weather-react-icons";
import { WiStrongWind, WiBarometer } from "react-icons/wi";
export default ({ day }) => {
  return (
    <div className=" min-w-max bg-white rounded-lg overflow-hidden title  mx-2 z-50 ">
      <div className="text-center bg-gradient-to-t from-sky-400 to-sky-200 text-white p-2 text-lg">
        {day.valid_date}
      </div>
      <div className="px-5">
        <div className="text-gray-800 flex flex-col items-center my-2  text-center text-lg">
          <WeatherIcon
            iconId={day.weather.code}
            name="owm"
            className="text-2xl mt-2"
          />
          {day.weather.description}
        </div>
        <div className="flex items-center gap-2 justify-center text-gray-800 text-lg">
          {day.min_temp}
          <FaTemperatureLow className="text-blue-600" /> - {day.max_temp}
          <FaTemperatureHigh className="text-red-600" />
        </div>
        <div className="text-gray-800 flex justify-center items-center text-lg">
          <WiStrongWind className="text-3xl " />
          {day.wind_spd} m/s
        </div>
        <div className="text-gray-800 flex justify-center items-center text-lg">
          <WiBarometer className="text-2xl " />
          {day.pres} mb
        </div>
      </div>
    </div>
  );
};
