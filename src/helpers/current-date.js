import { Months, Weekdays } from "./date-arrays";

// current data info
export const curDate = new Date();
export const Month = Months[curDate.getMonth()];
export const Weekday = Weekdays[curDate.getDay()];
export const Day = curDate.getDate();
