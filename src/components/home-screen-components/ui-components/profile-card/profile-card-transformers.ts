import { i18n } from "i18next";
import { UserDataState } from "../../../../redux/reducers/user-data/userDataReducer";

interface ReturnObject {
  username: string | null | undefined;
  city: string | null | undefined;
  country: string | null | undefined;
}

export const getProfileCardState = (userDataState: UserDataState, i18n: i18n): ReturnObject => {
  const username =
    !userDataState.firstName && !userDataState.lastName
      ? "Welcome!"
      : `${userDataState.firstName} ${userDataState.lastName}`;
  const city = i18n.language === "en" ? userDataState.cityEn : userDataState.citySv;
  const country = i18n.language === "en" ? userDataState.countryEn : userDataState.countrySv;

  return {
    username,
    city,
    country
  };
};
