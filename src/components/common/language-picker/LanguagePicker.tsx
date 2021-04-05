import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { useTranslation } from "react-i18next";
import { LanguagePickerComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<LanguagePickerComponentClasses>;
}

const LanguagePicker: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("common");
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("sv")}>sv</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
};

export default LanguagePicker;
