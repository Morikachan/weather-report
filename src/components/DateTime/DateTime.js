import { useState, useEffect } from "react";
import { Month, Weekday, Day, curDate } from "../../helpers/current-date";
import { Months, Weekdays } from "../../helpers/date-arrays";
import clockIcon from "../../img/clock.png";
import s from "./DateTime.module.css";

function DateTime({ timeInfo: { name, timezone } }) {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const [cityDay, setCityDay] = useState(() => " ");

  useEffect(() => {
    const localTime = curDate.getTime();
    const localOffset = curDate.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const cityTimeZone = utc + 1000 * timezone;
    const cityDate = new Date(cityTimeZone);

    setTime(cityDate.toLocaleTimeString("en-US", { timeStyle: "short" }));
    setCityDay(
      `${Weekdays[cityDate.getDay()]}, ${
        Months[cityDate.getMonth()]
      } ${cityDate.getDate()}`
    );
  }, [timezone]);

  return (
    <div className={s.container}>
      <img
        className={s.icon}
        src={clockIcon}
        width="40"
        height="40"
        alt="clock icon"
      />
      <div className={s.time_container}>
        <div className={s.wrapper}>
          <p className={s.time}>
            Time in your city:{" "}
            {curDate.toLocaleTimeString("en-US", { timeStyle: "short" })}
          </p>
          <p className={s.date}>
            {Weekday}, {Month} {Day}
          </p>
        </div>
        <div className={s.wrapper}>
          <p className={s.time}>
            Time in {name}: {time}
          </p>
          <p className={s.date}>{cityDay}</p>
        </div>
      </div>
    </div>
  );
}

export default DateTime;
