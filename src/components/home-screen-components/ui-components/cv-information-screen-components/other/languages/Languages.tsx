import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { LanguagesComponentClasses } from "./index";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  styles: ClassNameMap<LanguagesComponentClasses>;
}

const LanguagesComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");

  return (
    <div className={styles.languagesWrapperStyles}>
      <Container className={styles.languagesHeaderContainer}>
        <Typography className={styles.languagesHeader}>{t("languages.mainHeader")}</Typography>
        <AddIcon className={styles.addIconStyles} />
      </Container>
    </div>
  );
};

export default LanguagesComponent;
