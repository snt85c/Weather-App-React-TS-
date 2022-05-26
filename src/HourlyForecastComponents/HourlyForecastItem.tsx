import WeatherIcon from "../CityComponents/WeatherIcon";
import { IHourly } from "../Services/APIinterface";

export default function HourlyForecastItem(props: {
  data: IHourly;
  hour: number;
}) {
  return (
    <>
      <div className="flex md:flex-col flex-row justify-center items-center gap-2">
        <div className="font-extrabold md:-mb-4">+{props.hour + 1} hour</div>
        <div>{props.data.weather[0].main}</div>
        <div className="w-10 h-10">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div>
          <div>
            {props.data.temp ? (props.data.temp - 273.15).toFixed(1) : ""}°C
          </div>
          <div className=" -mt-1 text-[0.5rem]">temp</div>
        </div>
        <div>
          <div>{props.data.pop}%</div>
          <div className=" -mt-1 text-[0.5rem]"> chance of rain</div>
        </div>
      </div>
      <div className="border-b-2 md:border-0 border-gray-400 w-1/5 opacity-50"></div>
    </>
  );
}
