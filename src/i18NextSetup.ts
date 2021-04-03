import i18next from "i18next";

import commonSv from "./translations/sv/common.json";
import commonEn from "./translations/en/common.json";

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next
// READ MORE ABOUT SWITCHING LANGUAGES ETC

i18next.init({
  interpolation: { escapeValue: false },
  lng: "sv", // Base language
  resources: {
    en: {
      common: commonEn
    },
    sv: {
      common: commonSv
    }
  }
});

export default i18next;
