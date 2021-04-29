import { i18n } from "i18next";

const enMonths = [
  "Jan",
  "Febr",
  "Mars",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dec"
];
const svMonths = [
  "Jan",
  "Febr",
  "Mars",
  "Apr",
  "Maj",
  "Juni",
  "Juli",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dec"
];
const enDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const svDays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];

export const createDate = (): Date => {
  return new Date();
};

export const getDate = (): number => {
  return createDate().getDate();
};

interface CurrentMonth {
  svMonth: string;
  enMonth: string;
}

export const getCurrentMonth = (): CurrentMonth => {
  const currentMonth = createDate().getMonth();
  return {
    svMonth: svMonths[Number(currentMonth)],
    enMonth: enMonths[Number(currentMonth)]
  };
};

export const getCurrentYear = (): number => {
  return createDate().getFullYear();
};

interface CurrentDay {
  svDay: string;
  enDay: string;
}

export const getCurrentDay = (): CurrentDay => {
  const currentDay = createDate().getDay();
  return {
    svDay: svDays[Number(currentDay)],
    enDay: enDays[Number(currentDay)]
  };
};

export const getProfileCardDateText = (i18n: i18n): string => {
  return `${i18n.language === "en" ? getCurrentDay().enDay : getCurrentDay().svDay} ${getDate()} ${
    i18n.language === "en" ? getCurrentMonth().enMonth : getCurrentMonth().svMonth
  } ${getCurrentYear()}`;
};

export const getDateStandardFormat = (): string => {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  const today = yyyy + "-" + mm + "-" + dd;

  return today;
};
