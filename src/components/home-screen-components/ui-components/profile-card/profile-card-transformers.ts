import { i18n } from "i18next";
import { UserDataState } from "../../../../redux/reducers/user-data/userDataReducer";

export const getProfileCardState = (userDataState: UserDataState, i18n: i18n) => {
  const userName =
    !userDataState.firstName && !userDataState.lastName
      ? "Welcome!"
      : `${userDataState.firstName} ${userDataState.lastName}`;
  const city = i18n.language === "en" ? userDataState.cityEn : userDataState.citySv;
  const country = i18n.language === "en" ? userDataState.countryEn : userDataState.countrySv;

  return {
    userName,
    city,
    country
  };
};
