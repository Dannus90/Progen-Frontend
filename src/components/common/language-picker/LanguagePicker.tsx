import { Button, Paper } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { useTranslation } from "react-i18next";
import { LanguagePickerComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<LanguagePickerComponentClasses>;
}

const LanguagePicker: React.FC<Props> = ({ styles }): JSX.Element => {
  const [, i18n] = useTranslation("common");
  const languages = [...i18n.services.languageUtils.supportedLngs];
  languages.splice(-1, 1);

  return (
    <Paper elevation={2} className={styles.languagesPaper}>
      {languages.map((lng) => (
        <Button
          color="secondary"
          variant="contained"
          key={lng}
          className={styles.languageButton}
          onClick={() => i18n.changeLanguage(lng)}>
          {lng}
        </Button>
      ))}
    </Paper>
  );
};

export default LanguagePicker;
