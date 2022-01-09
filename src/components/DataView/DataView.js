import DateTime from "../DateTime";
import tempIcon from "../../img/temp.png";
import windIcon from "../../img/wind.png";
import dropIcon from "../../img/drop.png";
import s from "./DataView.module.css";

function DataView({
  weatherData: {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    description,
    icon,
    speed,
    timezone,
  },
}) {
  return (
    <main className={s.container}>
      <DateTime timeInfo={{ name: name, timezone: timezone }} />
      <h1 className={s.title}>
        Weather in {name}, {country}
      </h1>
      <div className={s.wrapper}>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          width="50"
          height="50"
          alt="Weather icon"
          className={s.icon}
        />
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.wrapper}>
        <img
          src={tempIcon}
          width="50"
          height="50"
          alt="Thermometer"
          className={s.icon}
        />
        <ul className={s.description}>
          <li>
            <b>Feels like:</b> {feels_like} °С
          </li>
          <li>
            <b>Current:</b> {temp} °С
          </li>
          <li>
            <b>High:</b> {temp_max} °С
          </li>
          <li>
            <b>Low:</b> {temp_min} °С
          </li>
        </ul>
      </div>

      <div className={s.wrapper}>
        <img
          src={windIcon}
          width="50"
          height="50"
          alt="Wind Speed"
          className={s.icon}
        />
        <p className={s.description}>
          <b>Wind Speed:</b> {speed} m/s
        </p>
      </div>
      <div className={s.wrapper}>
        <img
          src={dropIcon}
          width="50"
          height="50"
          alt="Humidity"
          className={s.icon}
        />
        <p className={s.description}>
          <b>Humidity:</b> {humidity} %
        </p>
      </div>
    </main>
  );
}

export default DataView;
