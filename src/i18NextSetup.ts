import i18next from "i18next";

import commonSv from "./translations/sv/common.json";
import commonEn from "./translations/en/common.json";
import registerSv from "./translations/sv/register.json";
import registerEn from "./translations/en/register.json";
import loginSv from "./translations/sv/login.json";
import loginEn from "./translations/en/login.json";
import homeSv from "./translations/sv/home.json";
import homeEn from "./translations/en/home.json";

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next
// READ MORE ABOUT SWITCHING LANGUAGES ETC

i18next.init({
  interpolation: { escapeValue: false },
  lng: "sv", // Base language
  resources: {
    en: {
      common: commonEn,
      register: registerEn,
      login: loginEn,
      home: homeEn
    },
    sv: {
      common: commonSv,
      register: registerSv,
      login: loginSv,
      home: homeSv
    }
  },
  supportedLngs: ["sv", "en"]
});

export default i18next;
